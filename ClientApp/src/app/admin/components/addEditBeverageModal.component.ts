import { Component, Input } from "@angular/core";
import { BeverageDTO } from "../BeverageDTO";
import { RestDataSource } from "src/app/model/rest.datasource";

@Component({
  selector: "add-edit-beverage-modal-content",
  templateUrl: "addEditBeverageModal.component.html"
})
export class AddEditBeverageModalContent {
  constructor(private restDataSource: RestDataSource) {}

  @Input()
  beverage: BeverageDTO;

  uploadBeverageImage(files) {
    this.restDataSource.uploadBeverageImage(files[0], this.beverage.id);
  }
}
