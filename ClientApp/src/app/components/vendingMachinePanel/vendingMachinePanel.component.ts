import { Component } from "@angular/core";
import { AppStateControlService } from "src/app/states/appStateControl.service";

@Component({
  selector: 'vending-machine-panel',
  templateUrl: "./vendingMachinePanel.component.html"
})
export class VendingMachinePanelComponent {
  constructor(appStateControlService: AppStateControlService) {}
}
