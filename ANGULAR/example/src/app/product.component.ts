import {Component} from "@angular/core";
//import { stat } from "fs";
import { Product } from "./product.model";
import { ProductRepository } from "./repository.model";

@Component({
  selector:"app",
  templateUrl:"product.component.html",
  styleUrls:["product.component.css"]
})
export class ProductComponent{

model :ProductRepository=new ProductRepository();

newProduct: Product = new Product();

get JsonProduct(){
  return JSON.stringify(this.newProduct);
}

addProduct(p:Product){

  console.log('New Product:' +this.JsonProduct)
}

log(x){
  console.log(x);
}

submitForm(form){
console.log(form);
}

getValidationErrors(state: any){
  let ctrlName: string =state.name;
  let messages: string[] =[];

  if(state.errors){
    for(let errorName in state.errors){
      switch(errorName){
        case "required":
          messages.push(`You must enter a ${ctrlName}`);
          break;
          case "minlength":
            messages.push(`Min. 3 characters for ${ctrlName}`);
            break;
             case "pattern":
            messages.push(`${ctrlName} contains illegal character`);
            break;

      }
    }
  }
  return messages;

}

















// productName:string=this.model.getProductsById(1).name;


// addProduct(){
//   this.model.addProduct(new Product(8,"Samsung S8","İyi telefon","1.jpg",9000)
//   )
// }

// deleteProduct(product:Product){
//  this.model.deleteProduct(product);
// }

// updateProduct(product:Product){
// product.name="updated";
// }

}
