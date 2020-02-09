
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VendingMachine.Model.DAL;
using VendingMachine.Model.DTO;

[ApiController]
public class AdminController : ControllerBase
{

    public AdminController(DbVendingMachineContext db)
    {
        this.db = db;
    }

    public DbVendingMachineContext db { get; }

    [HttpGet, Route("api/admin/all-beverages")]
    public async Task<List<BeverageDTO>> GetBeveragesDescription()
    {
        return await db.BeverageTypes.Select(e => new BeverageDTO
        {
            Id = e.Id,
            Name = e.Name,
            Cost = e.Cost,
            Image = e.Image,
            Quantity = e.BeverageStore.Quantity
        }).ToListAsync();
    }

    [HttpPost, DisableRequestSizeLimit, Route("api/admin/beverage/{id:int}/add-update-beverage-image")]
    public async Task AddUpdateBeverageImageAsync(int id)
    {
        BeverageType beverageType = await db.BeverageTypes.SingleAsync(e => e.Id == id);

        byte[] fileData = null;
        if (Request.Form.Files.Count != 0)
        {
            var stream = Request.Form.Files[0].OpenReadStream();

            using (var binaryReader = new BinaryReader(stream))
            {
                fileData = binaryReader.ReadBytes((int)stream.Length);
            }
        }


        beverageType.Image = fileData;

        await db.SaveChangesAsync();
    }

    [HttpGet, Route("api/get-all-coin-types")]
    public async Task<List<CoinTypeDTO>> GetAllCoinTypes()
    {

        return await db.CoinTypes.Select(e => new CoinTypeDTO
        {
            Blocked = e.CoinTypeSettings.Blocked,
            Nominal = e.Nominal,
            Count = e.CoinVault.Count
        }).ToListAsync();


    }

    [HttpPost, Route("api/edit-coin-type")]
    public async Task EditCoinType([FromBody]CoinTypeDTO coinTypeDTO)
    {
        CoinType coinType = await db.CoinTypes.SingleAsync(e => e.Nominal == coinTypeDTO.Nominal);

        coinType.CoinTypeSettings.Blocked = coinTypeDTO.Blocked;
        coinType.CoinVault.Count = coinTypeDTO.Count;

        await db.SaveChangesAsync();


    }


}