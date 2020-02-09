import { Injectable } from "@angular/core";
import { CoinRepository } from "../model/coin.repository";
import { CoinTypeDescription } from "../model/coinTypeDescription.model";
import { ContextualHelpService } from "./contextualHelp.service";

@Injectable()
export class CoinboxService {
  constructor(
    private coinRepository: CoinRepository,
    private contextualHelp: ContextualHelpService
  ) {}

  isReadOnly: boolean = false;

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
    this.contextualHelp.showMessage(
      `Вставлена монета номиналом ${coinNominal}`
    );
  }

  getCurrentCoinBasketValue(): number {
    return this.coinRepository.currentCoinBasketValue;
  }

  updateCurrentCoinBasketValue() {
    this.coinRepository.updateCurrentCoinBasketValue();
  }
}
