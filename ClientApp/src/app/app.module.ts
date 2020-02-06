import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { VendingMachinePanel } from "./vendingMachinePanel/vendingMachinePanel.component";
import { AppStateControlService } from "./services/appStateControl.service";
import { BeverageIsReadyToBeTakenStateService } from "./services/states/beverageIsReadyToBeTakenState.service";
import { GettingBeverageReadyStateService } from "./services/states/gettingBeverageReadyState.service";
import { GiveChangeStateService } from "./services/states/giveChangeState.service";
import { MainMenuStateService } from "./services/states/mainMenuState.service";

@NgModule({
  declarations: [AppComponent, VendingMachinePanel],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: VendingMachinePanel, pathMatch: "full" }
    ]),
    NgbModule
  ],
  providers: [
    AppStateControlService,
    BeverageIsReadyToBeTakenStateService,
    GettingBeverageReadyStateService,
    GiveChangeStateService,
    MainMenuStateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
