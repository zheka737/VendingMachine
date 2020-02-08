import { Injectable } from "@angular/core";
import { IState } from "./state";
import { MainState } from "./mainState";
import { GiveChangeState } from "./giveChangeState";
import { GettingBeverageReadyState } from "./gettingBeverageReadyState";
import { BeverageIsReadyToBeTakenState } from "./beverageIsReadyToBeTakenState";
import { BeveragesDescriptionRepository } from "../model/beverageDescription.repository";
import { CoinRepository } from "../model/coin.repository";
import { CoinboxService } from "../services/coinbox.service";
import { DisplayService, DisplayState } from "../services/display.service";

@Injectable()
export class AppStateControlService {
  private state: IState = null;

  constructor(
    private beverageDescriptionRepository: BeveragesDescriptionRepository,
    private coinboxService: CoinboxService,
    private displayService: DisplayService
  ) {

    this.coinboxService.loadCoinsDescription();
    this.coinboxService.updateCurrentCoinBasketValue();
    this.displayService.setDisplayState(DisplayState.Order);
    this.setMainState();
  }

  makeOrder() {
    this.setGettingBeverageReadyState();
  }


  setState(newState: IState) {
    this.state = newState;
    this.state.Execute();
  }

  setMainState() {
    this.setState(new MainState(this));
  }

  setGiveChangeState() {
    this.setState(new GiveChangeState(this));
  }

  setGettingBeverageReadyState() {
    this.setState(new GettingBeverageReadyState(this));
  }

  setBeverageIsReadyToBeTakenState() {
    this.setState(new BeverageIsReadyToBeTakenState(this));
  }

  updateBeverageDescriptions() {
    this.beverageDescriptionRepository.updateBeverageDescriptions();
  }
}
