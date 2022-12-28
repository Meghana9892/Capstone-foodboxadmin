import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../Admin';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  constructor(private service:AdminserviceService,private route:Router){}
  admin:Admin = new Admin;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public changepassword(password:any)
  {
    if((password=="")||(this.admin.password==null))
    {
      alert("Enter Credentails")
    }
    else if(password!=this.admin.password)
    {
      alert("Passwords does not match")
    }
    else
    {
    let response = this.service.adminpassword(this.admin);
    response.subscribe((data)=>alert(data))
    this.route.navigate(['/home'])
  }}

  public back()
  {
    this.route.navigate(['/home'])
  }

}
