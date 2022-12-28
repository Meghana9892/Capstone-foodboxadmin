import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Product';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  product:Product = new Product();
  output:any;
  message1:any
  message2:any
  message3:any
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  constructor(private service:ProductserviceService,private route:Router){}

  
  public addproduct()
  { 
    if((this.product.productname==null) || (this.product.cuisine==null) || (this.product.price==null))
    {
      alert("Enter the details")
    }
    else{
    let response = this.service.addprod(this.product);
    response.subscribe((data)=>this.output=data)
    alert("Product added");
  }
  }

  public back()
  {
    this.route.navigate(['/home'])
  }

}
