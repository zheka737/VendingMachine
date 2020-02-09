import { Component } from "@angular/core";
import { AdminRepository } from "../model/admin.repository";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { EditCoinTypeModalContent } from "./editCoinTypeModal.component";
import { CoinTypeDTO } from "../model/CoinTypeDTO";

@Component({
  selector: "admin-coins",
  templateUrl: "adminCoins.component.html"
})
export class AdminCoinsComponent {
  constructor(private repository: AdminRepository, private modalService: NgbModal) {
    this.repository.updateCoinTypes();
  }

  onEditCoinTypeClicked(coinType: CoinTypeDTO) {
    const modalRef = this.modalService.open(EditCoinTypeModalContent);
    modalRef.componentInstance.coinType = coinType;
    modalRef.result.then(() => {
      this.repository.editCoinType(coinType).subscribe(() => {
        this.repository.updateCoinTypes();
      });

    }, () => {
      this.repository.updateCoinTypes();
    });

  }
}
