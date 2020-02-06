using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VendingMachine.Model.DAL;
using VendingMachine.Model.DTO;

namespace VendingMachine.Controllers {

    [Route("api")]
    public class ApiVendingMachine
    {
        public DbVendingMachineContext db { get; }
        public ApiVendingMachine(DbVendingMachineContext db)
        {
            this.db = db;
        }


        [HttpGet, Route("get-beverages-description")]
        public async Task<List<BeverageDescriptionDTO>> GetBeveragesDescription() {
            return await db.BeverageTypes.Select(e => new BeverageDescriptionDTO {
                Name = e.Name,
                Cost = e.Cost,
                Image = e.Image,
                Available = e.BeverageStore.Quantity > 0
            }).ToListAsync();
        }

    }

}