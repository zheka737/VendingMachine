import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AdminBeveragesComponent } from "./adminBeverages.component";
import { AdminCoinsComponent } from "./adminCoins.component";
import { AdminComponent } from "./admin.component";

let routing = RouterModule.forChild([
  {
    path: "",
    component: AdminComponent,
    children: [
      { path: "beverages", component: AdminBeveragesComponent },
      { path: "coins", component: AdminCoinsComponent },
      { path: "**", redirectTo: "" }
    ]
  }
]);

@NgModule({
  imports: [CommonModule, FormsModule, routing],
  declarations: [AdminBeveragesComponent, AdminCoinsComponent, AdminComponent]
})
export class AdminModule {}
