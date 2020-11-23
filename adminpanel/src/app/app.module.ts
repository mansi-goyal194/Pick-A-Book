import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { DefaultComponent } from './dashboard/default/default.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AddcategoryComponent } from './dashboard/addcategory/addcategory.component';
import { AddproductsComponent } from './dashboard/addproducts/addproducts.component';
import { CategoryComponent } from './dashboard/category/category.component';
import { ChangepasswordComponent } from './dashboard/changepassword/changepassword.component';
import { EditcategoryComponent } from './dashboard/category/editcategory/editcategory.component';
import { FeedbacksComponent } from './dashboard/feedbacks/feedbacks.component';
import { OrdersComponent } from './dashboard/orders/orders.component';
import { ProductsComponent } from './dashboard/products/products.component';
import { EditproductsComponent } from './dashboard/products/editproducts/editproducts.component';
import { ApprovesellersComponent } from './dashboard/approvesellers/approvesellers.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    DefaultComponent,
    AddcategoryComponent,
    AddproductsComponent,
    CategoryComponent,
    ChangepasswordComponent,
    EditcategoryComponent,
    FeedbacksComponent,
    OrdersComponent,
    ProductsComponent,
    EditproductsComponent,
    ApprovesellersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
