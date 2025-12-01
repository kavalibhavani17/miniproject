import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import {HttpClientModule} from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { RatingComponent } from './rating/rating.component';
import { ButtonComponent } from './button/button.component';
import { CastleComponent } from './castle/castle.component';
import { MicroComponent } from './micro/micro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    DashboardComponent,
    ProductsComponent,
    AdminComponent,
    EditProductComponent,
    CreateProductComponent,
    AddProductComponent,
    RatingComponent,
    ButtonComponent,
    CastleComponent,
    MicroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
