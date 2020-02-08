import { IState } from "./state";
import { AppStateControlService } from "./appStateControl.service";
import { Injectable } from "@angular/core";
import { DisplayService, DisplayState } from "../services/display.service";

@Injectable()
export class BeverageIsReadyToBeTakenState implements IState {
  constructor(
    private appStateControlService: AppStateControlService,
    private displayService: DisplayService
  ) {}

  Execute(): void {
    this.displayService.setDisplayState(DisplayState.TakeBeverage);
  }
}
