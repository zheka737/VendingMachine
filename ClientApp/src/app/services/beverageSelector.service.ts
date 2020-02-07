import { Injectable } from "@angular/core";
import { BeveragesDescriptionRepository } from "../model/beverageDescription.repository";
import { BeverageDescription } from "../model/beverageDescription.model";


@Injectable()
export class BeverageSelectorService {
  constructor(private beveragesDescriptionRepository: BeveragesDescriptionRepository) {}

  getBeveragesDescription(): BeverageDescription[] {
    return this.beveragesDescriptionRepository.getBeverageDescriptions();
  }

  selectBeverage(beverage: BeverageDescription) {
    this.getBeveragesDescription().forEach(e => e.selected = false);
    beverage.selected = true;
  }

  getCurrentlySelectedBeverage(): BeverageDescription {
    return this.getBeveragesDescription().find(e => e.selected);
  }
}
