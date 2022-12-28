import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from './Admin';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http:HttpClient) { }

  public adminlogin(a:Admin)
  {
    return this.http.post("http://localhost:8019/admin",a,{responseType:'text' as 'json'});
  }

  public adminpassword(a:Admin)
  {
    return this.http.post("http://localhost:8019/adminpassword",a,{responseType:'text' as 'json'});
  }

  public getOrderbyUser(search:any)
  {
    return this.http.post("http://localhost:8019/orders",search);
  }

  public getUsers()
  {
    return this.http.get("http://localhost:8019/users");
  }

  public getOrderHistory()
  {
    return this.http.get("http://localhost:8019/orderhistory");
  }

}
