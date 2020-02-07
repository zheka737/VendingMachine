using System.Linq;
using Microsoft.AspNetCore.Mvc;
using VendingMachine.Model.DAL;

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
        public void PutCoinInCoinBasket([FromBody]int coinNominal) {
            CoinboxService.PutCoin(db.CoinTypes.Single(e => e.Nominal == coinNominal));
        }

        [HttpGet, Route("api/get-total-coin-basket-value")]
        public int GetTotalCoinBasketValue() {
            return CoinboxService.TotalCoinBasketValue();
        }
    }

}