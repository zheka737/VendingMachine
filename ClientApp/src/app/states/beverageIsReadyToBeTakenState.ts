import { IState } from "./state";
import { AppStateControlService } from "./appStateControl.service";
import { Injectable } from "@angular/core";
import { DisplayService, DisplayState } from "../services/display.service";
import { ContextualHelpService } from "../services/contextualHelp.service";

@Injectable()
export class BeverageIsReadyToBeTakenState implements IState {
  constructor(
    private appStateControlService: AppStateControlService,
    private displayService: DisplayService,
    private contextualHelp: ContextualHelpService
  ) {}

  Execute(): void {
    this.contextualHelp.showMessage("Автомат выдал напиток");
    this.displayService.setDisplayState(DisplayState.TakeBeverage);
  }
}
