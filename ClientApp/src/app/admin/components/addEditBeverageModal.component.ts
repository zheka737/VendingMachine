import { Component, Input, ViewChild, ElementRef } from "@angular/core";
import { BeverageDTO } from "../model/BeverageDTO";
import { RestDataSource } from "src/app/model/rest.datasource";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "add-edit-beverage-modal-content",
  templateUrl: "addEditBeverageModal.component.html"
})
export class AddEditBeverageModalContent {
  constructor(public activeModal: NgbActiveModal) {}

  @Input()
  beverage: BeverageDTO;

  @ViewChild('selectedImage', { static: true }) selectedImage: ElementRef;

  onSaveButtonPressed() {
    this.activeModal.close(
      {
        file: this.selectedImage.nativeElement.files[0],
        beverage: this.beverage
      }
    );
  }

  onCancelButtonPressed() {
    this.activeModal.dismiss();
  }
}
