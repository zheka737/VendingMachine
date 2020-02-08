import {Directive, Input, HostBinding} from '@angular/core';  
import { RestDataSource } from '../model/rest.datasource';
import { map } from 'rxjs/operators'

@Directive({  
  selector: '[beverage-image]' 
})  
export class ProfileImageDirective {   
  @Input('beverage-image') beverageId: number;  
  @HostBinding("src")
  hostSrc: any;

  constructor(private restDataSource: RestDataSource) { }  
  
  ngOnInit() {          
    this.restDataSource.getBeverageImage(this.beverageId)
      .subscribe(  
        data => {  
          this.hostSrc = 'data:image/png;base64,' + data;   
        }  
      );  
  }  
}  