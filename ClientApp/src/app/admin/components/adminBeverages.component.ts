import { Component } from "@angular/core";
import { AdminRepository } from "../model/admin.repository";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AddEditBeverageModalContent } from "./addEditBeverageModal.component";
import { BeverageDTO } from "../model/BeverageDTO";

@Component({
  selector: "admin-beverages",
  templateUrl: "adminBeverages.component.html"
})
export class AdminBeveragesComponent {
  constructor(
    private repository: AdminRepository,
    private modalService: NgbModal
  ) {
    repository.updateBeverages();
  }

  onAddBeverageClick() {}

  onEditBeverageClick(beverage: BeverageDTO) {
    const modalRef = this.modalService.open(AddEditBeverageModalContent);
    modalRef.componentInstance.beverage = beverage;
    modalRef.result.then(
      data => {
        this.repository
          .addEditBeverage(data.beverage)
          .subscribe((createdEditedBeverage: BeverageDTO) => {
            if (data.imageChanged) {
              this.repository
                .uploadBeverageImage(data.file, createdEditedBeverage.id)
                .subscribe(() => {
                  this.repository.updateBeverages();
                });
            }
          });
      },
      () => {
        this.repository.updateBeverages();
      }
    );
  }
}
