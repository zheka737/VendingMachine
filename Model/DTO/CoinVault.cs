namespace VendingMachine.Model.DAL
{

    public class CoinVault
    {

        public int Id { get; set; }

        public int Count { get; set; }

        public int CoinTypeId { get; set; }

        public virtual CoinType CoinType { get; set; }

    }

}