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
        public ApiVendingMachineController(DbVendingMachineContext db)
        {
            this.db = db;
        }


        [HttpGet, Route("api/get-beverages-description")]
        public async Task<List<BeverageDescriptionDTO>> GetBeveragesDescription() {
            return await db.BeverageTypes.Select(e => new BeverageDescriptionDTO {
                Name = e.Name,
                Cost = e.Cost,
                Image = e.Image,
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

        

    }

}