import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private service:AdminserviceService,
          private route:Router) {}
  users:any
  ngOnInit(): void {
   let response = this.service.getUsers();
   response.subscribe((data) => this.users=data)
  }

  public back()
  {
    this.route.navigate(['/home'])
  }


}
