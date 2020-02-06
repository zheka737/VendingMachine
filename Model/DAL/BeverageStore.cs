namespace VendingMachine.Model.DAL
{

    public class BeverageStore
    {

        public int Id { get; set; }

        public int Quantity { get; set; }

        public int BeverageTypeId { get; set; }

        public virtual BeverageType BeverageType { get; set; }

    }

}