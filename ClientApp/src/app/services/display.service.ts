import { Injectable } from "@angular/core";
import { AppStateControlService } from "../states/appStateControl.service";

@Injectable()
export class DisplayService {
  private _displayState: DisplayState;
  private _message: string;
  private _notification: string;

  constructor(private appStateControlService: AppStateControlService) {}

  get message() {
    return this._message;
  }

  get notification() {
    return this._notification;
  }

  get displayState(): DisplayState {
    return this._displayState;
  }

  setDisplayState(state: DisplayState) {
    this._displayState = state;
  }

  showMessage(message: string) {
    this._message = message;
    this.setDisplayState(DisplayState.Message);
  }

  showNotification(message: string) {
    let previousState: DisplayState = this.displayState;
    this._notification = message;
    this.setDisplayState(DisplayState.Notificcation);

    setTimeout(() => {
      this.setDisplayState(previousState);
    }, 2000);
  }

  orderMade() {
    this.appStateControlService.orderMade();
  }
}

export enum DisplayState {
  Order = 1,
  Message = 2,
  Notificcation = 3,
  TakeBeverage = 4
}
