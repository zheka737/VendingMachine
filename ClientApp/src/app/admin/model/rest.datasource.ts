import { Injectable } from "@angular/core";
import { HttpClient, HttpRequest, HttpHeaders } from "@angular/common/http";
import { BeverageDTO } from "./BeverageDTO";
import { Observable } from "rxjs";
import { CoinTypeDTO } from "./CoinTypeDTO";
import { share } from "rxjs/operators";

@Injectable()
export class AdminRestDataSource {
  constructor(private http: HttpClient) {}

  getAllBeverages(): Observable<BeverageDTO[]> {
    return this.http.get<BeverageDTO[]>("http://localhost:5000/api/admin/all-beverages");
  }

  getAllCoinTypes(): Observable<CoinTypeDTO[]> {
    return this.http.get<CoinTypeDTO[]>("http://localhost:5000/api/get-all-coin-types");
  }

  editCoinType(coinType: CoinTypeDTO) {
    return this.http.post("http://localhost:5000/api/edit-coin-type", coinType).pipe(share());
  }

  uploadBeverageImage(file, beverageTypeId: number): Observable<Object> {
    const formData = new FormData();

    if (file) {
      formData.append(file.name, file);
    }

    const uploadReq = new HttpRequest(
      "POST",
      `http://localhost:5000/api/admin/beverage/${beverageTypeId}/add-update-beverage-image`,
      formData
    );

    return this.http.request(uploadReq).pipe(share());
  }

  addEditBeverage(beverage: BeverageDTO): Observable<BeverageDTO> {
    return this.http
      .post<BeverageDTO>("http://localhost:5000/api/add-edit-beverage", beverage)
      .pipe(share());
  }

  deleteBeverage(beverageId: number): Observable<Object> {
    return this.http.delete(`http://localhost:5000/api/api/beverages/${beverageId}/delete`);
  }


}
