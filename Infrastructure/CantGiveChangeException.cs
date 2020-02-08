using System;

namespace VendingMachine.Infrastructure {

    public class CantGiveChangeException: ApplicationException {
        public CantGiveChangeException(string message):base(message){
            
        }
    }

}