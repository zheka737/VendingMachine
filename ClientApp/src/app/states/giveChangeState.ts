import { IState } from "./state";
import { AppStateControlService } from "./appStateControl.service";
import { Injectable } from "@angular/core";
import { DisplayService } from "../services/display.service";
import { CoinboxService } from "../services/coinbox.service";
import { BeverageSelectorService } from "../services/beverageSelector.service";

@Injectable()
export class GiveChangeState implements IState {
  constructor(
    private appStateControlService: AppStateControlService,
    private displayService: DisplayService,
    private coinboxService: CoinboxService,
    private beverageSelectorService: BeverageSelectorService
  ) {}

  Execute(): void {
    this.displayService.showMessage("Заберите деньги");
    this.coinboxService.returnModey();


    setTimeout(() => {
      this.appStateControlService.setMakeOrderState();
    }, 2000);
  }
}
