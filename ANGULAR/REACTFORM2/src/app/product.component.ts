import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

productForm = new FormGroup({

  name :new FormControl('Samsung S6'),
  description : new FormControl('İyi telefon'),
  price :new FormControl('1000'),
  imageUrl:new FormControl('1.jpg')

});

onSubmit(){
  console.log(this.productForm.value);
}

updateProduct(){
  this.productForm.patchValue({
    name: "Iphone X",
    price: 60000
  })
}



}
