import { Component } from "@angular/core";
import { DisplayService } from "src/app/services/display.service";
import { CoinboxService } from "src/app/services/coinbox.service";
import { AppStateControlService } from "src/app/states/appStateControl.service";
import { BeverageSelectorService } from "src/app/services/beverageSelector.service";
import { BeverageDescription } from "src/app/model/beverageDescription.model";

@Component({
    selector: "display",
    templateUrl: "display.component.html"
})
export class DisplayComponent {


    constructor(private displayService: DisplayService, private coinboxService: CoinboxService,
         private appStateControlService: AppStateControlService, private beverageSelectorService: BeverageSelectorService) {

    }

    onMakeOrderButtonClick() {

    }

    checkThatBeverageIsSelected(): boolean {
        return !!this.beverageSelectorService.getCurrentlySelectedBeverage();
    }

    checkThatThereIsEnoughMoneyInCoinBasketForSelectedBeverage() {

        let selectedBeverage: BeverageDescription = this.beverageSelectorService.getCurrentlySelectedBeverage();

        return !!selectedBeverage && selectedBeverage.cost <= this.coinboxService.getCurrentCoinBasketValue();
    }
}

