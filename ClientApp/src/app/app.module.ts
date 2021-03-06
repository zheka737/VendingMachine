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
import { BeverageIsReadyToBeTakenState } from "./states/beverageIsReadyToBeTakenState";
import { GettingBeverageReadyState } from "./states/gettingBeverageReadyState";
import { GiveChangeState } from "./states/giveChangeState";
import { MakeOrderState } from "./states/makeOrderState";
import { ContextualHelpService } from "./services/contextualHelp.service";
import { ContextualHelpComponent } from "./components/contextualHelp/contextualHelp.component";
import { AddEditBeverageModalContent } from "./admin/components/addEditBeverageModal.component";
import { ProfileImageDirective } from "./directives/beverageImage.directive";
import { EditCoinTypeModalContent } from "./admin/components/editCoinTypeModal.component";
import { AuthGuard } from "./services/admin.guard";
import { ImportBeveragesModalComponent } from "./admin/components/importBeveragesModal.component";

@NgModule({
  declarations: [
    AppComponent,
    VendingMachinePanelComponent,
    BeverageSelectorComponent,
    BeverageCardComponent,
    CoinboxComponent,
    DisplayComponent,
    ContextualHelpComponent,
    AddEditBeverageModalContent,
    ProfileImageDirective,
    EditCoinTypeModalContent,
    ImportBeveragesModalComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "admin/:key", loadChildren: "./admin/admin.module#AdminModule" , canActivate: [AuthGuard]},
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
    DisplayService,
    BeverageIsReadyToBeTakenState,
    GettingBeverageReadyState,
    GiveChangeState,
    MakeOrderState,
    ContextualHelpService,
    AuthGuard
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddEditBeverageModalContent, EditCoinTypeModalContent, ImportBeveragesModalComponent]
})
export class AppModule {}
