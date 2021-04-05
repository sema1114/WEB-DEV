import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   model= new Model();
   isDisplay=false;

   getName(){

     return this.model.user;
   }

   getItems(){
    if(this.isDisplay){ // eğer seçildiyse bütün elemanları geriye gönder
      return this.model.items;
    }
     return this.model.items.filter(item=>!item.action);
     //item action olmyanları al
   }

   addItem(value){
   if(value!=""){
   this.model.items.push(new TodoItem(value,false));
   }
   }



}
