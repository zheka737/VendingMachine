import { IState } from "./state";
import { AppStateControlService } from "../services/appStateControl.service";
import { Injectable } from "@angular/core";

export class GiveChangeState implements IState {
  constructor(private appStateControlService: AppStateControlService) {}

  Execute(): void {
    throw new Error("Method not implemented.");
  }
}
