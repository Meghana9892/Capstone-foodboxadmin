import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { LoginComponent } from './login/login.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { UsersComponent } from './users/users.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';

const routes: Routes = [

  {
    path:'addproduct',
    component:AddproductComponent
  },
  {
    path:'editproduct',
    component:EditproductComponent
  },
  {
    path:'home',
    component:ViewproductComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'users',
    component:UsersComponent
  },
  {
    path:'orders',
    component:OrderhistoryComponent
  },
  {
    path:'password',
    component:ChangepasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
