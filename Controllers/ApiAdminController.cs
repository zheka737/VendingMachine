
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VendingMachine.Model.DAL;
using VendingMachine.Model.DTO;

[ApiController]
public class AdminController: ControllerBase {

        public AdminController(DbVendingMachineContext db) {
        this.db = db;
    }

    public DbVendingMachineContext db { get; }

        [HttpGet, Route("api/admin/all-beverages")]
        public async Task<List<BeverageDTO>> GetBeveragesDescription() {
            return await db.BeverageTypes.Select(e => new BeverageDTO {
                Id = e.Id,
                Name = e.Name,
                Cost = e.Cost,
                Image = e.Image,
                Quantity = e.BeverageStore.Quantity
            }).ToListAsync();
        }

}