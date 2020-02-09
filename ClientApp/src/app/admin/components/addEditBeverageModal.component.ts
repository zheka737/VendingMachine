import { Component, Input, ViewChild, ElementRef } from "@angular/core";
import { BeverageDTO } from "../model/BeverageDTO";
import { RestDataSource } from "src/app/model/rest.datasource";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "add-edit-beverage-modal-content",
  templateUrl: "addEditBeverageModal.component.html"
})
export class AddEditBeverageModalContent {
  imageChanged: any = false;
  previewImage: string | ArrayBuffer;
  constructor(public activeModal: NgbActiveModal) {}

  @Input()
  beverage: BeverageDTO;

  @ViewChild("selectedImage", { static: true }) selectedImage: ElementRef;

  onSaveButtonPressed() {
    this.activeModal.close({
      file: this.selectedImage.nativeElement.files[0],
      beverage: this.beverage,
      imageChanged: this.imageChanged
    });
  }

  onCancelButtonPressed() {
    this.activeModal.dismiss();
  }

  onImageChange(event) {
    this.imageChanged = true;
    this.readURL(event);
  }

  readURL(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => (this.previewImage = reader.result);

      reader.readAsDataURL(file);
    }
  }
}
