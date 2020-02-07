import { Injectable } from "@angular/core";
import { IState } from "./state";
import { MainState } from "./mainState";
import { GiveChangeState } from "./giveChangeState";
import { GettingBeverageReadyState } from "./gettingBeverageReadyState";
import { BeverageIsReadyToBeTakenState } from "./beverageIsReadyToBeTakenState";
import { BeveragesDescriptionRepository } from "../model/beverageDescription.repository";
import { CoinRepository } from "../model/coin.repository";

@Injectable()
export class AppStateControlService {
  private state: IState = null;

  constructor(
    private beverageDescriptionRepository: BeveragesDescriptionRepository,
    private coinRepository: CoinRepository
  ) {
    this.coinRepository.loadCoinsDescription();
    this.setMainState();
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
