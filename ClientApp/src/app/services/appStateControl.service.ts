import { Injectable } from "@angular/core";
import { IState } from "./states/state";
import { MainStateService } from "./states/mainState.service";


@Injectable()
export class AppStateControlService {

  private state: IState = null;

  constructor() {
    this.setState(mainMenuStateService)
  }

  setState(newState: IState) {
    this.state = newState;
    this.state.Execute();
  }

}




