import { Component } from "@angular/core";
import { AdminRepository } from "../model/admin.repository";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AddEditBeverageModalContent } from "./addEditBeverageModal.component";
import { BeverageDTO } from "../model/BeverageDTO";
import { ImportBeveragesModalComponent } from "./importBeveragesModal.component";

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

  onAddBeverageClick() {
    this.addEditBeverage(new BeverageDTO());
  }

  onDeleteClick(beverage) {
    this.repository.deleteBeverage(beverage.id);
  }

  onImportBeveragesClick() {
    const modalRef = this.modalService.open(ImportBeveragesModalComponent);

    modalRef.result.then(file => {
      this.parseJsonFile(file);
    });
  }

  parseJsonFile(file) {
    const fileReader = new FileReader();
    fileReader.readAsText(file, "UTF-8");
    fileReader.onload = () => {
      let beveragesToImport: {
        beverages: {
          name: string;
          cost: number;
          quantity: number;
          imageUrl: string;
        }[];
      } = JSON.parse(<any>fileReader.result);

      beveragesToImport.beverages.forEach(e => {
        let beverageDTO = new BeverageDTO();
        beverageDTO.name = e.name;
        beverageDTO.quantity = e.cost;
        beverageDTO.cost = e.cost;

        this.repository
          .addEditBeverage(beverageDTO)
      });
    };
    fileReader.onerror = error => {
      console.log(error);
    };
  }

  addEditBeverage(beverage: BeverageDTO) {
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

  onEditBeverageClick(beverage: BeverageDTO) {
    this.addEditBeverage(beverage);
  }
}
