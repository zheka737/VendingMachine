import { Injectable } from "@angular/core";
import { RestDataSource } from "./rest.datasource";
import { CoinTypeDescription } from "./coinTypeDescription.model";
import { DisplayService } from "../services/display.service";
import { ContextualHelpService } from "../services/contextualHelp.service";
import { BeverageSelectorService } from "../services/beverageSelector.service";

@Injectable()
export class CoinRepository {
  private _coinsDescription: CoinTypeDescription[] = [];
  private _currentCoinBasketValue: number;
  private _returnedChangeCoins: CoinTypeDescription[] = [];

  constructor(
    private datasourse: RestDataSource,
    private contextualHelp: ContextualHelpService,
    private beverageSelectorService: BeverageSelectorService
  ) {}

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
    this.beverageSelectorService.unselectAllBeverages();
    this.datasourse.getChange().subscribe(
      data => {
        this._returnedChangeCoins = data;

        this.contextualHelp.showMessage(`Автомат выдал монеты номиналом: ${this.returnedChangeCoins.reduce((prevVal,currVal,idx) => {
          return idx == 0 ? currVal.nominal : prevVal + ', ' + currVal.nominal;
        }, "")}`)

      },
      error => {
        console.log(error);
      }
    );
  }
}
