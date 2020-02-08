import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AdminComponent } from "./components/admin.component";
import { AdminBeveragesComponent } from "./components/adminBeverages.component";
import { AdminCoinsComponent } from "./components/adminCoins.component";
import { AdminRestDataSource } from "./model/rest.datasource";
import { AdminRepository } from "./model/admin.repository";


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
  declarations: [AdminBeveragesComponent, AdminCoinsComponent, AdminComponent],
  providers: [AdminRestDataSource, AdminRepository]
})
export class AdminModule {}
