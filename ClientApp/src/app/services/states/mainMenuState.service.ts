import { Injectable } from "@angular/core";
import { AppStateControlService } from "../appStateControl.service";
import { IState } from "./state";

@Injectable()
export class MainMenuStateService implements IState {
  constructor(private appStateControlService: AppStateControlService) {}

  Execute(): void {}
}