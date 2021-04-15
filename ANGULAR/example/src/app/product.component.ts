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


onSubmit($event){
  $event.stopPropagation();
console.log("Button was clicked");
console.log($event);
}

onDivClicked(){
console.log('div was clicked');
}

}
