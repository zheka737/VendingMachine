namespace VendingMachine.Model.DTO
{

    public class BeverageDescriptionDTO
    {
        public int BeverageTypeId { get; set; }
        public string Name { get; set; }

        public int Cost { get; set; }

        public bool Available { get; set; }

    }

}