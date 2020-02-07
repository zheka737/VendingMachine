import { Injectable } from "@angular/core";
import { AppStateControlService } from "./appStateControl.service";
import { IState } from "./state";

export class GettingBeverageReadyState implements IState {
  constructor(private appStateControlService: AppStateControlService) {}

  Execute(): void {
    throw new Error("Method not implemented.");
  }
}
