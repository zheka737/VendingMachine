using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using VendingMachine.Model.DAL;
using VendingMachine.Model.DTO;

namespace VendingMachine.Controllers {

    [ApiController]
    public class ApiCoinboxController : ControllerBase
    {
        public ApiCoinboxController(DbVendingMachineContext db, CoinboxService coinboxService)
        {
            this.db = db;
            CoinboxService = coinboxService;
        }

        public DbVendingMachineContext db { get; }
        public CoinboxService CoinboxService { get; }

        [HttpPost, Route("api/put-coin-in-coin-basket")]
        public async Task PutCoinInCoinBasketAsync([FromBody]int coinNominal) {
           await  CoinboxService.PutCoinInBasket(db.CoinTypes.Single(e => e.Nominal == coinNominal));
        }

        [HttpGet, Route("api/get-total-coin-basket-value")]
        public int GetTotalCoinBasketValue() {
            return CoinboxService.TotalCoinBasketValue();
        }

        [HttpPost, Route("api/get-change")]
        public async Task<List<CoinTypeDescriptionDTO>> GetChange() {
            return (await CoinboxService.GiveChange()).Select(e => new CoinTypeDescriptionDTO {

            }).ToList();
        }
    }

}