import { Injectable } from "@angular/core";
import { HttpClient, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { BeverageDescription } from "./beverageDescription.model";
import { CoinTypeDescription } from "./coinTypeDescription.model";

@Injectable()
export class RestDataSource {
  constructor(private http: HttpClient) {}

  getBeveragesDescription(): Observable<BeverageDescription[]> {
    return this.http.get<BeverageDescription[]>(
      "/api/get-beverages-description"
    );
  }

  getCoinsDescription(): Observable<CoinTypeDescription[]> {
    return this.http.get<CoinTypeDescription[]>("/api/get-coins-description");
  }

  putCoinToCoinBasket(coinNominal: number): Observable<Object> {
    return this.http.post("/api/put-coin-in-coin-basket", coinNominal);
  }

  getTotalCoinBasketValue(): Observable<number> {
    return this.http.get<number>("/api/get-total-coin-basket-value");
  }

  orderBeverage(beverageTypeId: number): Observable<Object> {
    return this.http.post("/api/order-beverage", beverageTypeId);
  }

  getChange(): Observable<CoinTypeDescription[]> {
    return this.http.post<CoinTypeDescription[]>("/api/get-change", null);
  }

  getBeverageImage(beverageTypeId) {
    return this.http.get(`api/beverages/${beverageTypeId}/image`);
  }

  uploadBeverageImage(file, beverageTypeId: number) {

    const formData = new FormData();

    formData.append(file.name, file);

    const uploadReq = new HttpRequest('POST', `api/admin/beverage/${beverageTypeId}/add-update-beverage-image`, formData);

    this.http.request(uploadReq).subscribe(event => {
      console.log("Успешно загружено");
    });
  }
}
