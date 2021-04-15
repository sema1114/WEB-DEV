import { Product } from "./product.model";


export class SimpleDataSource{
  private products:Product[];

  constructor(){
    this.products= new Array<Product>(
      new Product(1,"Samsung S5","İyi telefon","1.jpg"),
      new Product(2,"Samsung S6","İyi telefon","2.jpg"),
      new Product(3,"Samsung S7","İyi telefon","3.jpg"),
      new Product(4,"Samsung S8","İyi telefon","4.jpg"),
      new Product(5,"Samsung S9","İyi telefon","5.jpg")


    )
  }


  getProducts(): Product[]{
    return this.products;
  }
}
