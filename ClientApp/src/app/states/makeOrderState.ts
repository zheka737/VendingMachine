import { Injectable } from "@angular/core";
import { AppStateControlService } from "./appStateControl.service";
import { IState } from "./state";
import { CoinboxService } from "../services/coinbox.service";
import { DisplayService, DisplayState } from "../services/display.service";
import { BeveragesDescriptionRepository } from "../model/beverageDescription.repository";

@Injectable()
export class MakeOrderState implements IState {
  constructor(
    private appStateControlService: AppStateControlService,
    private coinboxService: CoinboxService,
    private displayService: DisplayService,
    private beverageDescriptionRepository: BeveragesDescriptionRepository
  ) {}

  Execute(): void {
    this.coinboxService.loadCoinsDescription();
    this.coinboxService.updateCurrentCoinBasketValue();
    this.displayService.setDisplayState(DisplayState.Order);
    this.beverageDescriptionRepository.updateBeverageDescriptions();
  }
}
