import { Product } from "./Product";
import { ProductService } from "./ProductService";

let _productService=new ProductService();


let result;

// result =_productService.getProducts();
 result =_productService.getById(2);

let p=new Product();
p.id=2;
p.name='Iphone';
p.price=7000;
p.category="Telefon";

_productService.saveProduct(p);


//_productService.deleteProduct(result);
result =_productService.getProducts();

console.log(result);