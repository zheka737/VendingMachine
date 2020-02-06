namespace VendingMachine.Model.DAL
{

    public class CoinType
    {
        public int Id { get; set; }
        public int Nominal { get; set; }

        public virtual CoinTypeSettings CoinTypeSettings { get; set; }
        public virtual CoinVault CoinVault { get; set; }
    }

}