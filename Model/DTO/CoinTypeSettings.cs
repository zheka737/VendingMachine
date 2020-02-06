



namespace VendingMachine.Model.DAL
{

    public class CoinTypeSettings
    {

        public int CoinTypeId { get; set; }

        public bool Blocked { get; set; }

        public virtual CoinType CoinType { get; set; }

    }

}