import { Component } from "@angular/core";
import { CoinboxService } from "src/app/services/coinbox.service";

@Component({
  selector: 'coinbox',
  templateUrl: 'coinbox.component.html'
})
export class CoinboxComponent {

  constructor(private coinBoxService: CoinboxService) {

  }

  onCoinClick(coinNominal: number) {
    this.coinBoxService.putCoinInCoinBasket(coinNominal);
  }

}
