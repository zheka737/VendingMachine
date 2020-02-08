import { Component } from "@angular/core";
import { AdminRepository } from "../model/admin.repository";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AddEditBeverageModalContent } from "./addEditBeverageModal.component";

@Component({
  selector: "admin-beverages",
  templateUrl: "adminBeverages.component.html"
})
export class AdminBeveragesComponent {

  constructor(private repository: AdminRepository,
      private modalService: NgbModal) {
    repository.updateBeverages();
  }

  onAddBeverageClick() {
    const modalRef = this.modalService.open(AddEditBeverageModalContent);
  }

}
