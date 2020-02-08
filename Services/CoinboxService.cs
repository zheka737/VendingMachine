using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using VendingMachine.Infrastructure;
using VendingMachine.Model;
using VendingMachine.Model.DAL;
using VendingMachine.Model.DTO;

namespace VendingMachine {

    public class CoinboxService {

        public CoinboxService(DbVendingMachineContext db) {
            this.db = db;
        }

        public DbVendingMachineContext db { get; }

        public async Task PutCoinInBasket(CoinType coinType) {
            CoinInBasket coinInBasket = new CoinInBasket {
                CoinType = coinType
            };

            db.CoinsInBasket.Add(coinInBasket);

            await db.SaveChangesAsync();
        }

        public int TotalCoinBasketValue() {
            return db.CoinsInBasket.Sum(e => e.CoinType.Nominal);
        }

        public async Task SellBeverage(BeverageType beverageType) {

            int valueToExtract = beverageType.Cost;
            int changeValue = TotalCoinBasketValue() - valueToExtract;

            using (var transaction = db.Database.BeginTransaction())
            {
                try{
                    await PutAllCoinsFromCoinBasketToVaultAsync();

                    await ExtractCoinFromVaultAndPutItInCoinBasketByValueAsync(changeValue);

                    await ExtractBeverageFromStoreAsync(beverageType);

                    await transaction.CommitAsync();
                }
                catch(Exception){
                    await transaction.RollbackAsync();
                    throw;
                }

            }

        }

        private async Task ExtractCoinFromVaultAndPutItInCoinBasketByValueAsync(int changeValue)
        {
            List<CoinVault> coinVaults = await db.CoinVaults.Where(e => e.Count != 0).OrderByDescending(e => e.CoinType.Nominal).ToListAsync();

            foreach(CoinVault coinVault in coinVaults) {
                while(coinVault.CoinType.Nominal <= changeValue){
                    if(coinVault.Count > 0) {
                        await ExtractCoinFromVaultAndPutItInCoinBasketAsync(coinVault.CoinType.Nominal);
                        changeValue -= coinVault.CoinType.Nominal;
                    }
                        
                }
            }

            if(changeValue > 0) {
                throw new CantGiveChangeException("Невозможно выдать сдачу");
            }
        }

        public async Task PutAllCoinsFromCoinBasketToVaultAsync() {

            List<CoinInBasket> coinsInBasket = await db.CoinsInBasket.Select(e => e).ToListAsync();

            foreach(CoinInBasket coin in coinsInBasket) {
                CoinVault coinVault = db.CoinVaults.Single(e => e.CoinType.Nominal == coin.CoinType.Nominal);
                coinVault.Count++;

            }

            db.CoinsInBasket.RemoveRange(coinsInBasket);

            await db.SaveChangesAsync();
        }

        public async Task ExtractCoinFromVaultAndPutItInCoinBasketAsync(int nominal) {
            (await db.CoinVaults.SingleAsync(e => e.CoinType.Nominal == nominal)).Count--;
           
            db.CoinsInBasket.Add(new CoinInBasket {
                CoinType = await db.CoinTypes.SingleAsync(e => e.Nominal == nominal)
            });

            await db.SaveChangesAsync();
        }

        public async Task ExtractBeverageFromStoreAsync(BeverageType beverageType) {
            beverageType.BeverageStore.Quantity--;
            await db.SaveChangesAsync();
        }

        public async Task<List<CoinTypeDescriptionDTO>> GiveChange() {

            List<CoinTypeDescriptionDTO> result;

            List<CoinInBasket> coinInBasket = await db.CoinsInBasket.Select(e => e).ToListAsync();

            result = coinInBasket.Select(e => new CoinTypeDescriptionDTO {
                Nominal = e.CoinType.Nominal,
                Blocked = e.CoinType.CoinTypeSettings.Blocked
            }).ToList();

            db.CoinsInBasket.RemoveRange(coinInBasket);

            await db.SaveChangesAsync();

            return result;
        }
    }

}