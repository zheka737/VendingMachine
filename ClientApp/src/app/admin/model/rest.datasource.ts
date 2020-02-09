import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BeverageDTO } from "./BeverageDTO";
import { Observable } from "rxjs";
import { CoinTypeDTO } from "./CoinTypeDTO";

@Injectable()
export class AdminRestDataSource {
    constructor(private http: HttpClient) {

    }

    getAllBeverages(): Observable<BeverageDTO[]>{
        return this.http.get<BeverageDTO[]>("/api/admin/all-beverages");
    }

    getAllCoinTypes(): Observable<CoinTypeDTO[]> {
        return this.http.get<CoinTypeDTO[]>("/api/get-all-coin-types");
    }
}