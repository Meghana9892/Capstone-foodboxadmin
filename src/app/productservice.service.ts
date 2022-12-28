import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http:HttpClient) { }

  public addprod(p:Product)
  {
    return this.http.post("http://localhost:8019/addproduct",p,{responseType:'text' as 'json'});
  }

  public editprod(p:Product)
  {
    return this.http.put("http://localhost:8019/save",p,{responseType:'text' as 'json'});
  }

  public viewprod()
  {
    return this.http.get("http://localhost:8019/products");
  }

  public deleteprod(p:Product)
  {
    return this.http.post("http://localhost:8019/delete",p,{responseType:'text' as 'json'});
  }
}
