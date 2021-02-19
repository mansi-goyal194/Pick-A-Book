import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './pages/default/default.component';
import { CartComponent } from './pages/cart/cart.component';
import { CatproComponent } from './pages/catpro/catpro.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { MyordersComponent } from './pages/myorders/myorders.component';
import { OrderComponent } from './pages/order/order.component';
import { ProductdetailsComponent } from './pages/productdetails/productdetails.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ShopdefaultComponent } from './pages/shopdefault/shopdefault.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    CartComponent,
    CatproComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    MyordersComponent,
    OrderComponent,
    ProductdetailsComponent,
    ShopComponent,
    ShopdefaultComponent,
    SigninComponent,
    SignupComponent,
    AboutusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
