import { Injectable } from "@angular/core";
import { RestDataSource } from "./rest.datasource";
import { CoinTypeDescription } from "./coinTypeDescription.model";

@Injectable()
export class CoinRepository {

  private _coinsDescription: CoinTypeDescription[] = [];

  constructor(private datasourse: RestDataSource) {}

  loadCoinsDescription() {
    this.datasourse.getCoinsDescription().subscribe(data => {
      this._coinsDescription = data;
    });
  }

  get coinsDescription() {
    return this.coinsDescription;
  }

}
