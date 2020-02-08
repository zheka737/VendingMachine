namespace VendingMachine.Model.DAL {

    public class CoinInBasket {

        public int Id {get; set;}
        public int CoinTypeId {get; set;}

        public virtual CoinType CoinType {get; set;}

    }
}