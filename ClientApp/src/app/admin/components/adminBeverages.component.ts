import { Component } from "@angular/core";
import { AdminRepository } from "../model/admin.repository";

@Component({
  selector: "admin-beverages",
  templateUrl: "adminBeverages.component.html"
})
export class AdminBeveragesComponent {

  constructor(private repository: AdminRepository) {
    repository.updateBeverages();
  }

  onAddBeverageClick() {
    
  }

}
