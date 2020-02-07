import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { VendingMachinePanelComponent } from "./components/vendingMachinePanel/vendingMachinePanel.component";
import { AppStateControlService } from "./services/appStateControl.service";


@NgModule({
  declarations: [AppComponent, VendingMachinePanelComponent],
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
