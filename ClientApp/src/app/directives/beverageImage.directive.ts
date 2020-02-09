import { Directive, Input, HostBinding } from "@angular/core";
import { RestDataSource } from "../model/rest.datasource";
import { map } from "rxjs/operators";
import { DomSanitizer } from "@angular/platform-browser";

@Directive({
  selector: "[beverage-image]"
})
export class ProfileImageDirective {
  @Input("beverage-image") beverageId: number;
  @HostBinding("src")
  hostSrc: any;

  constructor(
    private restDataSource: RestDataSource,
    private _sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.restDataSource.getBeverageImage(this.beverageId).subscribe(data => {
      if (data) {
        this.hostSrc = this._sanitizer.bypassSecurityTrustResourceUrl(
          "data:image/jpg;base64," + data
        );
      }
    });
  }
}
