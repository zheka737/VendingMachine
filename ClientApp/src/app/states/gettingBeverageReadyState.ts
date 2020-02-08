import { Injectable } from "@angular/core";
import { AppStateControlService } from "./appStateControl.service";
import { IState } from "./state";
import { DisplayService } from "../services/display.service";

@Injectable()
export class GettingBeverageReadyState implements IState {
  constructor(
    private appStateControlService: AppStateControlService,
    private displayService: DisplayService
  ) {}

  Execute(): void {
    this.displayService.showMessage("Напиток готовится, подождите...");

    setTimeout(() => {
      this.appStateControlService.setBeverageIsReadyToBeTakenState();
    }, 2000);
  }
}
