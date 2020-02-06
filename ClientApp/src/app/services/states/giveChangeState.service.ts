import { IState } from "./state";
import { AppStateControlService } from "../appStateControl.service";
import { Injectable } from "@angular/core";

@Injectable()
export class GiveChangeStateService implements IState {
  constructor(private appStateControlService: AppStateControlService) {}

  Execute(): void {
    throw new Error("Method not implemented.");
  }
}
