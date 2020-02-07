import { Injectable } from "@angular/core";

@Injectable()
export class DisplayService {

    private _displayState: DisplayState;

    get displayState(): DisplayState {
        return this._displayState;
    }

    setDisplayState(state: DisplayState) {
        this._displayState = state;
    } 

}

export enum DisplayState {
    Order = 1,
}