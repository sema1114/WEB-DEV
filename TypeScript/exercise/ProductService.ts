import { IProductService } from "./IProductService";
import {Product} from './Product';
import { SimpleDataSource } from "./SimpleDataSource";

export class ProductService implements IProductService{

    private dataSource:SimpleDataSource;
    private products:Array<Product>;

    constructor(){
        this.dataSource=new SimpleDataSource();
        this.products=new Array<Product>();

        this.dataSource.getProducts().forEach(p=>{
        this.products.push(p);
        });
    }

    getById(id: number): Product {
     
        return this.products.filter(p=>p.id===id)[0];//yukardaki id ye karşılık gelen ilk id
    }
    getProducts(): Product[] {

     return this.products;  
    
    }
    saveProduct(pruduct: Product): void {

        if(pruduct.id==0 ||pruduct.id==null){
         pruduct.id=this.generateId();
         this.products.push(pruduct);
        }else{
            let index;
            for(let i=0;i<this.products.length;i++){
            if(this.products[i].id===pruduct.id){
                index=i;
            }
            }
            this.products.splice(index,1,pruduct);
        }
     
    }
    deleteProduct(product: Product): void {

        let index=this.products.indexOf(product);
        this.products.splice(index,1);

    }

   private  generateId(): number{
   let key=1;

   while(this.getById(key)!=null){
   key++;
   }

   return key;
    }

}