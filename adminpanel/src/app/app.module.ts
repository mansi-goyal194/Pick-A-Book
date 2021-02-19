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
import { FeedbacksComponent } from './dashboard/feedbacks/feedbacks.component';
import { OrdersComponent } from './dashboard/orders/orders.component';
import { ProductsComponent } from './dashboard/products/products.component';


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
    FeedbacksComponent,
    OrdersComponent,
    ProductsComponent,
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
