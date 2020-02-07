import { Component } from "@angular/core";
import { BeverageSelectorService } from "src/app/services/beverageSelectorService";

@Component({
    selector: 'beverage-selector',
    templateUrl: "./beverageSelector.component.html"
})
export class BeverageSelectorComponent {
  constructor(private beverageSelectorService: BeverageSelectorService) {

  }

}
