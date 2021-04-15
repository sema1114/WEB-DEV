import {Component} from "@angular/core";
import { Product } from "./product.model";
import { ProductRepository } from "./repository.model";

@Component({
  selector:"app",
  templateUrl:"product.component.html",
  styleUrls:["product.component.css"]
})
export class ProductComponent{

model:ProductRepository=new ProductRepository();


onKeyUp(email){

   console.log(email);

}

}
