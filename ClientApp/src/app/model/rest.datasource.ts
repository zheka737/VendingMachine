import { Injectable } from "@angular/core";
import { HttpClient, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { BeverageDescription } from "./beverageDescription.model";
import { CoinTypeDescription } from "./coinTypeDescription.model";
import { ContextualHelpService } from "../services/contextualHelp.service";

@Injectable()
export class RestDataSource {
  constructor(
    private http: HttpClient,
    private contextualHelp: ContextualHelpService
  ) {}

  getBeveragesDescription(): Observable<BeverageDescription[]> {
    return this.http.get<BeverageDescription[]>(
      "http://localhost:5000/api/get-beverages-description"
    );
  }

  getCoinsDescription(): Observable<CoinTypeDescription[]> {
    return this.http.get<CoinTypeDescription[]>("http://localhost:5000/api/get-coins-description");
  }

  putCoinToCoinBasket(coinNominal: number): Observable<Object> {
    return this.http.post("http://localhost:5000/api/put-coin-in-coin-basket", coinNominal);
  }

  getTotalCoinBasketValue(): Observable<number> {
    return this.http.get<number>("http://localhost:5000/api/get-total-coin-basket-value");
  }

  orderBeverage(beverageTypeId: number): Observable<Object> {
    return this.http.post("http://localhost:5000/api/order-beverage", beverageTypeId);
  }

  getChange(): Observable<CoinTypeDescription[]> {
    return this.http.post<CoinTypeDescription[]>("http://localhost:5000/api/get-change", null);
  }

  getBeverageImage(beverageTypeId) {
    return this.http.get(`http://localhost:5000/api/beverages/${beverageTypeId}/image`, {
      responseType: "text"
    });
  }

  uploadBeverageImage(file, beverageTypeId: number) {
    const formData = new FormData();

    formData.append(file.name, file);

    const uploadReq = new HttpRequest(
      "POST",
      `http://localhost:5000/api/admin/beverage/${beverageTypeId}/add-update-beverage-image`,
      formData
    );

    this.http.request(uploadReq).subscribe(event => {
      this.contextualHelp.showMessage("Картинка успешно загружена");
    });
  }
}
