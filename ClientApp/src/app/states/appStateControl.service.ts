import { Injectable } from "@angular/core";
import { IState } from "./state";
import { MakeOrderState } from "./makeOrderState";
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
  beverageIsReadyToBeTakenState: BeverageIsReadyToBeTakenState;
  gettingBeverageReadyState: GettingBeverageReadyState;
  giveChangeState: GiveChangeState;
  makeOrderState: MakeOrderState;

  constructor() {}

  bootstrap() {
    this.setMakeOrderState();
  }

  orderMade() {
    this.setGettingBeverageReadyState();
  }

  setState(newState: IState) {
    this.state = newState;
    this.state.Execute();
  }

  continuePurchases() {
    this.setMakeOrderState();
  }

  takeChange() {
    this.setGiveChangeState();
  }

  setMakeOrderState() {
    this.setState(this.makeOrderState);
  }

  setGiveChangeState() {
    this.setState(this.giveChangeState);
  }

  setGettingBeverageReadyState() {
    this.setState(this.gettingBeverageReadyState);
  }

  setBeverageIsReadyToBeTakenState() {
    this.setState(this.beverageIsReadyToBeTakenState);
  }
}
