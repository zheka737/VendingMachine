import { Injectable } from "@angular/core";
import { BeverageDTO } from "./BeverageDTO";
import { AdminRestDataSource } from "./rest.datasource";
import { CoinTypeDTO } from "./CoinTypeDTO";
import { ContextualHelpService } from "src/app/services/contextualHelp.service";
import { Observable } from "rxjs";

@Injectable()
export class AdminRepository {
  private _beverages: BeverageDTO[] = [];
  private _coinTypes: CoinTypeDTO[] = [];

  constructor(
    private dataSource: AdminRestDataSource,
    private contextHelp: ContextualHelpService
  ) {}

  get beverages() {
    return this._beverages;
  }

  get coinTypes() {
    return this._coinTypes;
  }

  updateBeverages() {
    this.dataSource.getAllBeverages().subscribe((data: BeverageDTO[]) => {
      this._beverages = data;
    });
  }

  updateCoinTypes() {
    this.dataSource.getAllCoinTypes().subscribe((data: CoinTypeDTO[]) => {
      this._coinTypes = data;
    });
  }

  editCoinType(coinType: CoinTypeDTO): Observable<Object> {
    let observable = this.dataSource.editCoinType(coinType);

    observable.subscribe(() => {
      this.contextHelp.showMessage("Монета изменена");
    });

    return observable;
  }

  uploadBeverageImage(file, id): Observable<Object> {
    let observable = this.dataSource.uploadBeverageImage(file, id);

    return observable;
  }

  addEditBeverage(beverage: BeverageDTO): Observable<BeverageDTO> {
    let observable = this.dataSource.addEditBeverage(beverage);
    observable.subscribe(event => {
      this.updateBeverages();
      this.contextHelp.showMessage("Напиток успешно изменен");
    });

    return observable;
  }

  deleteBeverage(beverageId: number) {
    this.dataSource.deleteBeverage(beverageId).subscribe(() => {
      this.updateBeverages();
      this.contextHelp.showMessage("Напиток удален");
    });
  }


}
