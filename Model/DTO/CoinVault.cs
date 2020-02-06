namespace VendingMachine.Model.DAL
{

    public class CoinVault
    {

        public int CoinTypeId { get; set; }

        public int Count { get; set; }

        public virtual CoinType CoinType { get; set; }

    }

}