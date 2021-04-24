import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {


name =new FormControl('Samsung S6');
description = new FormControl('İyi telefon');
price =new FormControl('1000');
imageUrl=new FormControl('1.jpg');

updateName(){
  this.name.setValue('Samsung S10')
}

}
