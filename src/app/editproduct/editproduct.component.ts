import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Product';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  constructor(private service:ProductserviceService,private route:Router){}

  product:Product = new Product;
  result:any

  prodname:any;
  prodid:any;
  prodcuisine:any;
  prodprice:any

  ngOnInit(): void {
    this.prodname= history.state.i.productname;
    this.prodid = history.state.i.productid;
    this.prodcuisine = history.state.i.cuisine;
    this.prodprice = history.state.i.price;
  }

  public save(prodname:any,cuisine:any,price:any)
  {
    
    this.product.productid = this.prodid;
    this.product.productname = prodname;
    this.product.cuisine = cuisine;
    this.product.price = price;

   
    let response = this.service.editprod(this.product);
    response.subscribe((data)=>this.result=data)
    alert("Changes saved");
  }
   
  
  public back()
  {
    this.route.navigate(['/home'])
  }
  }

  

