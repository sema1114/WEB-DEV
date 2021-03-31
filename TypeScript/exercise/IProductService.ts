import { Product } from "./Product";

export interface IProductService{
    getById(id:number):Product; //Bize product döndürcek
    getProducts():Array<Product>;
    saveProduct(pruduct:Product):void;
    deleteProduct(product:Product):void;
}
