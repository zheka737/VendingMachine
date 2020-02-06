import { IState } from "./state";
import { AppStateControlService } from "../appStateControl.service";

export class GiveChangeStateService implements IState {
  constructor(private appStateControlService: AppStateControlService) {}

  Execute(): void {
    throw new Error("Method not implemented.");
  }
}
