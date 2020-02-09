import { Injectable } from "@angular/core";
import { AppStateControlService } from "./appStateControl.service";
import { IState } from "./state";
import { DisplayService } from "../services/display.service";
import { RestDataSource } from "../model/rest.datasource";
import { BeverageSelectorService } from "../services/beverageSelector.service";
import { BeverageDescription } from "../model/beverageDescription.model";
import { ContextualHelpService } from "../services/contextualHelp.service";
import { CoinboxService } from "../services/coinbox.service";

@Injectable()
export class GettingBeverageReadyState implements IState {
  constructor(
    private appStateControlService: AppStateControlService,
    private displayService: DisplayService,
    private restDataSource: RestDataSource,
    private beverageSelectorService: BeverageSelectorService,
    private contextualHelp: ContextualHelpService,
    private coinboxService: CoinboxService,
    
  ) {}

  Execute(): void {
    let beverageType: BeverageDescription = this.beverageSelectorService.getCurrentlySelectedBeverage();
    this.beverageSelectorService.isReadonly = true;
    this.coinboxService.isReadOnly = true;
    this.contextualHelp.showMessage("Автомат жужжит");

    this.restDataSource.orderBeverage(beverageType.beverageTypeId).subscribe(
      () => {
        this.displayService.showMessage("Напиток готовится, подождите...");

        setTimeout(() => {
          this.appStateControlService.setBeverageIsReadyToBeTakenState();
        }, 2000);
      },
      error => {
        console.log(error);

        if ((<string>error.error).indexOf("Невозможно выдать сдачу") > -1) {
          this.displayService.showNotification("Невозможно выдать сдачу");
        }
      }
    );
  }
}
