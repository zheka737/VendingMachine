import { Component } from "@angular/core";
import { ContextualHelpService } from "src/app/services/contextualHelp.service";

@Component({
  selector: "contextual-help",
  templateUrl: "contextualHelp.component.html"
})
export class ContextualHelpComponent {
  constructor(private contextualHelpService: ContextualHelpService) {}
}
