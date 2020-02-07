import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { BeverageDescription } from "./beverageDescription.model";
import { CoinTypeDescription } from "./coinTypeDescription.model";

@Injectable()
export class RestDataSource {
    constructor(private http: HttpClient) {}

    getBeveragesDescription(): Observable<BeverageDescription[]> {
        return this.http.get<BeverageDescription[]>("/api/get-beverages-description")
    }

    getCoinsDescription(): Observable<CoinTypeDescription[]> {
      return this.http.get<CoinTypeDescription[]>("/api/get-coins-description");
    }

    putCoinToCoinBasket(coinNominal: number) {
      return this.http.post("/api/put-coin-in-coin-basket", coinNominal);
    }

    getTotalCoinBasketValue(): Observable<number> {
      return this.http.get<number>("/api/get-total-coin-basket-value");
    }
}

