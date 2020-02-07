import { Component, Input } from "@angular/core";
import { BeverageDescription } from "src/app/model/beverageDescription.model";


@Component({
  selector: 'beverage-card',
  templateUrl: "beverageCard.component.html"
})
export class BeverageCardComponent {

  @Input()
  private beverage: BeverageDescription;

  constructor() {

  }

}
