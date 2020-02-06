



namespace VendingMachine.Model.DAL
{

    public class CoinTypeSettings
    {

        public int Id { get; set; }

        public bool Blocked { get; set; }

        public int CoinTypeId { get; set; }

        public virtual CoinType CoinType { get; set; }

    }

}