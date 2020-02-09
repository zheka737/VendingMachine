import { Component, Input } from "@angular/core";
import { CoinTypeDTO } from "../model/CoinTypeDTO";

@Component({
    selector: "edit-coin-type",
    templateUrl: "editCoinTypeModal.component.html"
})
export class EditCoinTypeModalContent {

    @Input() 
    coinType: CoinTypeDTO;


}