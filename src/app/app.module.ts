import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { OrderhistoryComponent } from './orderhistory/orderhistory.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';


@NgModule({
  declarations: [
    AppComponent,
    AddproductComponent,
    EditproductComponent,
    ViewproductComponent,
    LoginComponent,
    UsersComponent,
    OrderhistoryComponent,
    ChangepasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
