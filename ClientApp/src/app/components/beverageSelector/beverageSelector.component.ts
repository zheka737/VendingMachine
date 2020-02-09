import { Component } from "@angular/core";
import { BeverageSelectorService } from "src/app/services/beverageSelector.service";
import { BeverageDescription } from "src/app/model/beverageDescription.model";
import { CoinRepository } from "src/app/model/coin.repository";

@Component({
  selector: "beverage-selector",
  templateUrl: "./beverageSelector.component.html"
})
export class BeverageSelectorComponent {
  constructor(
    private beverageSelectorService: BeverageSelectorService,
    private coinRepository: CoinRepository
  ) {}

  onBeverageSelectionHandler(beverage: BeverageDescription) {
    this.beverageSelectorService.selectBeverage(beverage);
  }
}
