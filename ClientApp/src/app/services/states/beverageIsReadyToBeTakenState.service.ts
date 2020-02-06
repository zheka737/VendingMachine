import { IState } from "./state";
import { AppStateControlService } from "../appStateControl.service";


export class BeverageIsReadyToBeTakenStateService implements IState {

  constructor(private appStateControlService: AppStateControlService) {}

  Execute(): void {
    throw new Error("Method not implemented.");
  }
}
