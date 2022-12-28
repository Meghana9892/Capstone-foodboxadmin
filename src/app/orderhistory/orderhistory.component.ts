import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.css']
})
export class OrderhistoryComponent implements OnInit {

  constructor(private service:AdminserviceService,private route:Router){}

  purchases:any;

  ngOnInit(): void {
    let response= this.service.getOrderHistory()
    response.subscribe((data) => this.purchases=data)
  }

  public back()
  {
    this.route.navigate(['/home'])
  }

  public getOrderbyUser(search:any)
  {
    let response = this.service.getOrderbyUser(search)
    response.subscribe((data)=>{
      if(data==null)
      {
        alert("User not found")
      }
      else{
        this.purchases=data
      }
    })
  }
}
