import { Injectable } from "@angular/core";
import { CoinRepository } from "../model/coin.repository";
import { CoinTypeDescription } from "../model/coinTypeDescription.model";

@Injectable()
export class CoinboxService {
  constructor(private coinRepository: CoinRepository) {}

  returnModey() {
    this.coinRepository.getChange();
    this.updateCurrentCoinBasketValue();
  }

  loadCoinsDescription() {
    this.coinRepository.loadCoinsDescription();
  }

  getCoinsDescription(): CoinTypeDescription[] {
    return this.coinRepository.coinsDescription;
  }

  putCoinInCoinBasket(coinNominal: number): void {
    this.coinRepository.putCoinInCoinBasket(coinNominal);
  }

  getCurrentCoinBasketValue(): number {
    return this.coinRepository.currentCoinBasketValue;
  }

  updateCurrentCoinBasketValue() {
    this.coinRepository.updateCurrentCoinBasketValue();
  }
}
