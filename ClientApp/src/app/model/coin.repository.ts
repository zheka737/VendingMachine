import { Injectable } from "@angular/core";
import { RestDataSource } from "./rest.datasource";
import { CoinTypeDescription } from "./coinTypeDescription.model";

@Injectable()
export class CoinRepository {
  private _coinsDescription: CoinTypeDescription[] = [];
  private _currentCoinBasketValue: number;
  private _returnedChangeCoins: CoinTypeDescription[] = [];

  constructor(private datasourse: RestDataSource) {}

  loadCoinsDescription() {
    this.datasourse.getCoinsDescription().subscribe(data => {
      this._coinsDescription = data;
    });
  }

  get returnedChangeCoins(): CoinTypeDescription[] {
    return this._returnedChangeCoins;
  }

  get coinsDescription(): CoinTypeDescription[] {
    return this._coinsDescription;
  }

  putCoinInCoinBasket(coinNominal: number): void {
    this.datasourse.putCoinToCoinBasket(coinNominal).subscribe(() => {
      this.updateCurrentCoinBasketValue();
    });
  }

  updateCurrentCoinBasketValue() {
    this.datasourse.getTotalCoinBasketValue().subscribe(data => {
      this._currentCoinBasketValue = data;
    });
  }

  get currentCoinBasketValue() {
    return this._currentCoinBasketValue;
  }

  getChange() {
    this.datasourse.getChange().subscribe(
      data => {
        this._returnedChangeCoins = data;
      },
      error => {
        console.log(error);
      }
    );
  }
}
