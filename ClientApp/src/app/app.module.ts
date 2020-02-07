import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { VendingMachinePanelComponent } from "./components/vendingMachinePanel/vendingMachinePanel.component";
import { AppStateControlService } from "./states/appStateControl.service";
import { BeverageSelectorComponent } from "./components/beverageSelector/beverageSelector.component";
import { BeverageCardComponent } from "./components/beverageSelector/beverageCard/beverageCard.component";
import { BeverageSelectorService } from "./services/beverageSelector.service";
import { BeveragesDescriptionRepository } from "./model/beverageDescription.repository";
import { RestDataSource } from "./model/rest.datasource";
import { CoinboxService } from "./services/coinbox.service";
import { CoinRepository } from "./model/coin.repository";
import { CoinboxComponent } from "./components/coinbox/coinbox.component";
import { DisplayService } from "./services/display.service";
import { DisplayComponent } from "./components/display/display.component";


@NgModule({
  declarations: [AppComponent, VendingMachinePanelComponent, BeverageSelectorComponent,
     BeverageCardComponent, CoinboxComponent, DisplayComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: VendingMachinePanelComponent, pathMatch: "full" }
    ]),
    NgbModule
  ],
  providers: [
    AppStateControlService,
    BeverageSelectorService,
    RestDataSource,
    BeveragesDescriptionRepository,
    CoinboxService,
    CoinRepository,
    DisplayService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
