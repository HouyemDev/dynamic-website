import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DriversDashboardComponent } from '../drivers-dashboard/drivers-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeliverydetailsComponent } from './deliverydetails/deliverydetails.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AdminComponent,
    SignupComponent,
    LoginComponent,
    DriversDashboardComponent,
    DeliverydetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AdminRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
