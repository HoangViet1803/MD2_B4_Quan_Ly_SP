import { Product } from "./Product";
import { ProductManager } from './ProductManager';

let laptop = new Product("laptop", 20000);
let iphone = new Product("iphone", 10000);

let productManager = new ProductManager();
productManager.add(laptop);
productManager.add(iphone);
console.log(productManager.getAll());
