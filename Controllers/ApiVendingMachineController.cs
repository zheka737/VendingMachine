using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VendingMachine.Model.DAL;
using VendingMachine.Model.DTO;

namespace VendingMachine.Controllers {

    [ApiController]
    public class ApiVendingMachineController: ControllerBase
    {
        public DbVendingMachineContext db { get; }
        public CoinboxService CoinboxService { get; }

        public ApiVendingMachineController(DbVendingMachineContext db, CoinboxService coinboxService)
        {
            this.db = db;
            CoinboxService = coinboxService;
        }


        [HttpGet, Route("api/get-beverages-description")]
        public async Task<List<BeverageDescriptionDTO>> GetBeveragesDescription() {
            return await db.BeverageTypes.Select(e => new BeverageDescriptionDTO {
                BeverageTypeId = e.Id,
                Name = e.Name,
                Cost = e.Cost,
                Available = e.BeverageStore.Quantity > 0
            }).ToListAsync();
        }

        [HttpGet, Route("api/get-coins-description")]
        public async Task<List<CoinTypeDescriptionDTO>> GetCoinsDescription() {
            return await db.CoinTypes.Select(e => new CoinTypeDescriptionDTO{
                Nominal = e.Nominal,
                Blocked = e.CoinTypeSettings.Blocked
            }).ToListAsync();
        }

        [HttpPost, Route("api/order-beverage")]
        public async Task OrderBeverage([FromBody]int beverageTypeId) {
            BeverageType beverageType = await db.BeverageTypes.SingleAsync(e => e.Id == beverageTypeId);

            if(CoinboxService.TotalCoinBasketValue() < beverageType.Cost) {
                throw new ApplicationException("Недостаточно средств для выдачи напитка");
            }

            if(beverageType.BeverageStore.Quantity == 0) {
                throw new ApplicationException("Напиток закончился");
            }

            await CoinboxService.SellBeverage(beverageType);
        }

        [HttpGet, Route("api/beverages/{id:int}/image")]
        public async Task<string> GetImageAsync(int id) {
            BeverageType beverageType = await db.BeverageTypes.SingleAsync(e => e.Id == id);

            if(beverageType.Image != default) {
                return System.Convert.ToBase64String(beverageType.Image);
            }
            else {
                return "";
            }

        }

        [HttpGet, Route("api/get-all-coin-types")]
        public async Task<List<CoinTypeDTO>> GetAllCoinTypes() {

            return await db.CoinTypes.Select(e => new CoinTypeDTO {
                Blocked = e.CoinTypeSettings.Blocked,
                Nominal = e.Nominal,
                Count = e.CoinVault.Count
            }).ToListAsync();


        }

        [HttpPost, Route("api/edit-coin-type")]
        public async Task EditCoinType([FromBody]CoinTypeDTO coinTypeDTO) {
            CoinType coinType = await db.CoinTypes.SingleAsync(e => e.Nominal == coinTypeDTO.Nominal);

            coinType.CoinTypeSettings.Blocked = coinTypeDTO.Blocked;
            coinType.CoinVault.Count = coinTypeDTO.Count;

            await db.SaveChangesAsync();


        }

    }

}