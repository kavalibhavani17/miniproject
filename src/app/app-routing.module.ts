import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { AdminComponent } from './admin/admin.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AppGuard } from './app.guard';
import { AddProductComponent } from './add-product/add-product.component';


const routes: Routes = [
  {path:'', component:LoginPageComponent},
  {path:'signup', component:SignUpComponent},
  {path:'login', component:LoginPageComponent},
  {path:'forgot', component:ForgotPasswordComponent},
  {path: 'dashboard',component: DashboardComponent, canActivate:[AppGuard]},
  {path:'dashboard/products/:id', component:ProductsComponent},
  {path: 'admin', component:AdminComponent,
    children: [
     
      { path: 'edit/:id', component: EditProductComponent }, // /admin/edit/123
      
    ]
  },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
