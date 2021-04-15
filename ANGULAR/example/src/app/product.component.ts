import {Component} from "@angular/core";
import { Product } from "./product.model";
import { ProductRepository } from "./repository.model";

@Component({
  selector:"app",
  template:`
  <!-- <input [value]="email" (keyup.enter)="email=$event.target.value;onKeyUp()"/> -->
  <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
  <span>{{email}} </span>
  `,
  styleUrls:["product.component.css"]
})
export class ProductComponent{

model:ProductRepository=new ProductRepository();

email="email@semabayri.com";
onKeyUp(){

   console.log(this.email);

}

}
