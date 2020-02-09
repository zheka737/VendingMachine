import { Injectable } from "@angular/core";
import { BeverageDTO } from "./BeverageDTO";
import { AdminRestDataSource } from "./rest.datasource";
import { CoinTypeDTO } from "./CoinTypeDTO";

@Injectable()
export class AdminRepository {

    private _beverages: BeverageDTO[] = [];
    private _coinTypes: CoinTypeDTO[] = [];

    constructor(private dataSource: AdminRestDataSource) {

    }

    get beverages() {
        return this._beverages;
    }

    get coinTypes() {
        return this._coinTypes;
    }

    updateBeverages() {
        this.dataSource.getAllBeverages().subscribe((data: BeverageDTO[]) => {
            this._beverages = data;
        })
    }

    updateCoinTypes() {
        this.dataSource.getAllCoinTypes().subscribe((data: CoinTypeDTO[]) => {
            this._coinTypes = data;
        })
    }

}