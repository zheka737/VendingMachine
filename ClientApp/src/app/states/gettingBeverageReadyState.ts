import { Injectable } from "@angular/core";
import { AppStateControlService } from "./appStateControl.service";
import { IState } from "./state";
import { DisplayService } from "../services/display.service";
import { RestDataSource } from "../model/rest.datasource";
import { BeverageSelectorService } from "../services/beverageSelector.service";

@Injectable()
export class GettingBeverageReadyState implements IState {
  constructor(
    private appStateControlService: AppStateControlService,
    private displayService: DisplayService,
    private restDataSource: RestDataSource,
    private beverageSelectorService: BeverageSelectorService
  ) {}

  Execute(): void {
    this.restDataSource
      .orderBeverage(
        this.beverageSelectorService.getCurrentlySelectedBeverage()
          .beverageTypeId
      )
      .subscribe(
        () => {
          this.displayService.showMessage("Напиток готовится, подождите...");

          setTimeout(() => {
            this.appStateControlService.setBeverageIsReadyToBeTakenState();
          }, 2000);
        },
        error => {
          console.log(error);
        }
      );
  }
}
