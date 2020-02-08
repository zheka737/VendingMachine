using System;

namespace VendingMachine.Model {

    public class Coin: ICloneable {
        public int Nominal {get; set;}

        public Coin(int nominal) {
            Nominal = nominal;
        }

        public object Clone()
        {
            return new Coin(this.Nominal);
        }
    }

}