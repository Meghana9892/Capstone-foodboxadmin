import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../Admin';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:AdminserviceService,private route:Router){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  admin:Admin = new Admin;

  public login(email:any,password:any)
  {
    if((email=="") || (password==""))
    {
      alert("Enter Credentials")
    }
    
    else{
    let response = this.service.adminlogin(this.admin);
    response.subscribe((data) => {
      if(data=="true")
      {
        this.route.navigate(['/home'])
      }
      else{
        alert("Invalid Credentials");
      }
    })
  }
}
}
