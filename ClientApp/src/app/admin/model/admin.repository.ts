import { Injectable } from "@angular/core";
import { BeverageDTO } from "../BeverageDTO";
import { AdminRestDataSource } from "./rest.datasource";

@Injectable()
export class AdminRepository {

    private _beverages: BeverageDTO[] = [];

    constructor(private dataSource: AdminRestDataSource) {

    }

    get beverages() {
        return this._beverages;
    }

    updateBeverages() {
        this.dataSource.getAllBeverages().subscribe((data: BeverageDTO[]) => {
            this._beverages = data;
        })
    }


}