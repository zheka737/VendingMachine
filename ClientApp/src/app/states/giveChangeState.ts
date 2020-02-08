import { IState } from "./state";
import { AppStateControlService } from "./appStateControl.service";
import { Injectable } from "@angular/core";
import { DisplayService } from "../services/display.service";

@Injectable()
export class GiveChangeState implements IState {
  constructor(
    private appStateControlService: AppStateControlService,
    private displayService: DisplayService
  ) {}

  Execute(): void {
    this.displayService.showMessage("Заберите деньги");

    setTimeout(() => {
      this.appStateControlService.setMakeOrderState();
    }, 2000);
  }
}
