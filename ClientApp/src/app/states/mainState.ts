import { Injectable } from "@angular/core";
import { AppStateControlService } from "../services/appStateControl.service";
import { IState } from "./state";

export class MainState implements IState {
  constructor(private appStateControlService: AppStateControlService) {}

  Execute(

  ): void {}
}
