import { Injectable } from "@angular/core";
import { IState } from "../states/state";
import { MainState } from "../states/mainState";
import { GiveChangeState } from "../states/giveChangeState";
import { GettingBeverageReadyState } from "../states/gettingBeverageReadyState";
import { BeverageIsReadyToBeTakenState } from "../states/beverageIsReadyToBeTakenState";


@Injectable()
export class AppStateControlService {

  private state: IState = null;

  constructor() {
    this.setMainState();
  }

  setState(newState: IState) {
    this.state = newState;
    this.state.Execute();
  }

  setMainState() {
    this.setState(new MainState(this))
  }

  setGiveChangeState() {
    this.setState(new GiveChangeState(this))
  }

  setGettingBeverageReadyState() {
    this.setState(new GettingBeverageReadyState(this))
  }

  setBeverageIsReadyToBeTakenState() {
    this.setState(new BeverageIsReadyToBeTakenState(this))
  }

}




