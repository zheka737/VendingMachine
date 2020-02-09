import { Component, Input } from "@angular/core";
import { CoinTypeDTO } from "../model/CoinTypeDTO";
import { AdminRestDataSource } from "../model/rest.datasource";
import { AdminRepository } from "../model/admin.repository";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "edit-coin-type",
  templateUrl: "editCoinTypeModal.component.html"
})
export class EditCoinTypeModalContent {
  constructor(public activeModal: NgbActiveModal) {}

  @Input()
  coinType: CoinTypeDTO;

  onSaveButtonClicked() {
    this.activeModal.close();
  }

  onCancelButtonClicked() {
    this.activeModal.dismiss();
  }
}
