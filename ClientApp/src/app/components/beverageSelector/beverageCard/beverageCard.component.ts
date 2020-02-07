import { Component, Input, Output, EventEmitter } from "@angular/core";
import { BeverageDescription } from "src/app/model/beverageDescription.model";

@Component({
  selector: "beverage-card",
  templateUrl: "beverageCard.component.html"
})
export class BeverageCardComponent {
  @Input()
  private beverage: BeverageDescription;

  @Output()
  onBeverageSelected: EventEmitter<BeverageDescription> = new EventEmitter();

  constructor() {}

  onSelectionChange(event) {
    if(event.target.checked) {
      this.onBeverageSelected.emit(this.beverage);
    }
  }
}
