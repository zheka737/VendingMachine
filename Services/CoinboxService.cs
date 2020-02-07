using System.Collections.Generic;
using System.Linq;
using VendingMachine.Model.DAL;

namespace VendingMachine {

    public class CoinboxService {

        private List<CoinType> coinBasket {get; set;} = new List<CoinType>();

        public void PutCoin(CoinType coin) {
            coinBasket.Add(coin);
        }

        public int TotalCoinBasketValue() {
            return coinBasket.Sum(e => e.Nominal);
        }
    }

}