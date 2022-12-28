import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Product';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  constructor(private service:ProductserviceService,
              private route:Router){}

  prod:Product = new Product;
  result:any;
  products:any;
  ngOnInit(): void {
    
    let response = this.service.viewprod();
    response.subscribe((data)=> this.products=data)
  }

  public edit(i:any)
  {
    this.route.navigateByUrl('/editproduct',{state:{i}});
  }

  public deleteproduct(i:Product)
  {
    let res = this.service.deleteprod(i);
    res.subscribe((data)=>this.result=data)
    alert("Product deleted, refresh the page")
    
  }

  public signout()
  {
    this.route.navigate(['/login'])
  }

}
