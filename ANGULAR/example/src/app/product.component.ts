import {Component} from "@angular/core";
import { NgForm } from "@angular/forms";
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

formSubmitted:boolean=false;

submitForm(form:NgForm){
  console.log(form);
this.formSubmitted=true;//form Submit edilmiş

  if(form.valid){ //true ysa demekki bize validation işlemi gelmemiş
  this.addProduct(this.newProduct);
  this.newProduct= new Product();//new product girilen bilgilerden temizlenir
  form.reset();//kullanıcının forma firdiği bilgiler resetlenir(formun içinden bilgi girmemiş olursun)
  this.formSubmitted=false; //Formu bir sonraki giriş için formu hazırlamış oluyoruz

  }


}

getFormValidationErrors(form:NgForm):string[]{

  let messagess:string[]=[];

  Object.keys(form.controls).forEach(k=>{
    console.log(k); //name
    console.log(form.controls[k]);//FormControl(name)

    this.getValidationErrors(form.controls[k],k)
    .forEach(message=>messagess.push(message))
  })



  return messagess;

}



getValidationErrors(state: any,key:string){
  let ctrlName: string =state.name || key;
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
