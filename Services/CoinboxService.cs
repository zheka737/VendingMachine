using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using VendingMachine.Infrastructure;
using VendingMachine.Model;
using VendingMachine.Model.DAL;

namespace VendingMachine {

    public class CoinboxService {

        public CoinboxService(DbVendingMachineContext db) {
            this.db = db;
        }

        private List<Coin> CoinBasket {get; set;} = new List<Coin>();
        public DbVendingMachineContext db { get; }

        public void PutCoin(int nominal) {
            CoinBasket.Add(new Coin(nominal));
        }

        public int TotalCoinBasketValue() {
            return CoinBasket.Sum(e => e.Nominal);
        }

        public async Task SellBeverage(BeverageType beverageType) {

            int valueToExtract = beverageType.Cost;
            int changeValue = TotalCoinBasketValue() - valueToExtract;
            List<Coin> CoinBasketBackup = CoinBasket.Clone<Coin>();

            using (var transaction = db.Database.BeginTransaction())
            {
                try{
                    List<Coin> newCoinBasket = new List<Coin>();
                    await PutAllCoinsFromCoinBasketToVaultAsync();

                    await ExtractCoinFromVaultAndPutItInCoinBasketByValueAsync(changeValue);

                    await ExtractBeverageFromStoreAsync(beverageType);

                    await transaction.CommitAsync();
                }
                catch(Exception){
                    await transaction.RollbackAsync();
                    CoinBasket = CoinBasketBackup;
                    throw;
                }

            }

        }

        private async Task ExtractCoinFromVaultAndPutItInCoinBasketByValueAsync(int changeValue)
        {
            List<CoinVault> coinVaults = await db.CoinVaults.Where(e => e.Count != 0).OrderByDescending(e => e.CoinType.Nominal).ToListAsync();

            foreach(CoinVault coinVault in coinVaults) {
                while(coinVault.CoinType.Nominal >= changeValue){
                    await ExtractCoinFromVaultAndPutItInCoinBasketAsync(coinVault.CoinType.Nominal);
                    changeValue -= coinVault.CoinType.Nominal;
                }
            }

            if(changeValue > 0) {
                throw new CantGiveChangeException("Невозможно выдать сдачу");
            }
        }

        public async Task PutAllCoinsFromCoinBasketToVaultAsync() {
            foreach(Coin coin in CoinBasket) {
                CoinVault coinVault = db.CoinVaults.Single(e => e.CoinType.Nominal == coin.Nominal);
                coinVault.Count++;
            }

            await db.SaveChangesAsync();

            CoinBasket.Clear();
        }

        public async Task ExtractCoinFromVaultAndPutItInCoinBasketAsync(int nominal) {
            (await db.CoinVaults.SingleAsync(e => e.CoinType.Nominal == nominal)).Count--;
            CoinBasket.Add(new Coin(nominal));

            await db.SaveChangesAsync();
        }

        public async Task ExtractBeverageFromStoreAsync(BeverageType beverageType) {
            beverageType.BeverageStore.Quantity--;
            await db.SaveChangesAsync();
        }
    }

}