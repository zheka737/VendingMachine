import { Component } from "@angular/core";
import { AppStateControlService } from "./states/appStateControl.service";
import { BeverageIsReadyToBeTakenState } from "./states/beverageIsReadyToBeTakenState";
import { GettingBeverageReadyState } from "./states/gettingBeverageReadyState";
import { GiveChangeState } from "./states/giveChangeState";
import { MakeOrderState } from "./states/makeOrderState";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  title = "app";
  constructor(
    appStateControlService: AppStateControlService,
    beverageIsReadyToBeTakenState: BeverageIsReadyToBeTakenState,
    gettingBeverageReadyState: GettingBeverageReadyState,
    giveChangeState: GiveChangeState,
    makeOrderState: MakeOrderState
  ) {
    appStateControlService.beverageIsReadyToBeTakenState = beverageIsReadyToBeTakenState;
    appStateControlService.gettingBeverageReadyState = gettingBeverageReadyState;
    appStateControlService.giveChangeState = giveChangeState;
    appStateControlService.makeOrderState = makeOrderState;

    appStateControlService.bootstrap();
  }
}
