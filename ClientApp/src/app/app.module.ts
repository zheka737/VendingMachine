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
import { BeverageSelectorService } from "./services/beverageSelectorService";
import { BeveragesDescriptionRepository } from "./model/beverageDescription.repository";
import { RestDataSource } from "./model/rest.datasource";


@NgModule({
  declarations: [AppComponent, VendingMachinePanelComponent, BeverageSelectorComponent, BeverageCardComponent],
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
    BeveragesDescriptionRepository
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
