import { Inject, Injectable } from "@angular/core";
import { RestDataSource } from "./rest.datasource";
import { BeverageDescription } from "./beverageDescription.model";

@Injectable()
export class BeveragesDescriptionRepository {

    private beveragesDescription: BeverageDescription[] = [];

    constructor(private datasourse: RestDataSource) {

    }

    loadBeverageDescriptions() {
        this.datasourse.getBeveragesDescription().subscribe(data => {
            this.beveragesDescription = data;
        })
    }

    getBeverageDescriptions() {
        return this.beveragesDescription;
    } 
}