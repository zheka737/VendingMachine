import { Component } from "@angular/core";
import { BeverageSelectorService } from "src/app/services/beverageSelectorService";
import { BeverageDescription } from "src/app/model/beverageDescription.model";

@Component({
    selector: 'beverage-selector',
    templateUrl: "./beverageSelector.component.html"
})
export class BeverageSelectorComponent {
  constructor(private beverageSelectorService: BeverageSelectorService) {

  }

  onBeverageSelectionHandler(beverage: BeverageDescription) {
    this.beverageSelectorService.selectBeverage(beverage)
  }
}
