import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BeverageDTO } from "../BeverageDTO";
import { Observable } from "rxjs";

@Injectable()
export class AdminRestDataSource {
    constructor(private http: HttpClient) {

    }

    getAllBeverages(): Observable<BeverageDTO[]>{
        return this.http.get<BeverageDTO[]>("/api/admin/all-beverages");
    }
}