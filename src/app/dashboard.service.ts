import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpclient: HttpClient) {}

  getProducts() {
    return this.httpclient.get("https://shop-ease-mit.vercel.app/api/products");
  }
  filterProducts(term:string){
   return this.httpclient.get("https://shop-ease-mit.vercel.app/api/products?filter="+term);
  }
  getProduct(id:string){
    return this.httpclient.get("https://shop-ease-mit.vercel.app/api/products/"+id);
  }
  updateProducts(product:any, id:string){
    return this.httpclient.put("https://shop-ease-mit.vercel.app/api/products/"+id, product);
  }
  limitproducts(limit:number, page:number){
    return this.httpclient.get("https://shop-ease-mit.vercel.app/api/products?limit="+limit+"&page="+page);
  }
  AdminComponent(product:any){
    return this.httpclient.post("https://shop-ease-mit.vercel.app/api/products", product);
  }
  deleteProduct(id:string){
    return this.httpclient.delete("https://shop-ease-mit.vercel.app/api/products/"+id)
  }
  
}
