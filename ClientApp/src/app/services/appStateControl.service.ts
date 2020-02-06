import { Injectable } from "@angular/core";
import { IState } from "./states/state";
import { MainMenuStateService } from "./states/mainMenuState.service";


@Injectable()
export class AppStateControlService {

  private state: IState = null;

  constructor(mainMenuStateService: MainMenuStateService) {
    this.setState(mainMenuStateService)
  }

  setState(newState: IState) {
    this.state = newState;
    this.state.Execute();
  }

}




