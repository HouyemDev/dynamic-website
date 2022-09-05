import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverRoutingModule } from './driver-routing.module';
import { DriverComponent } from './driver.component';
import { ConnecteComponent } from './connecte/connecte.component';
import { DeconnexionComponent } from './deconnexion/deconnexion.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DriverComponent,
    ConnecteComponent,
    DeconnexionComponent
  ],
  imports: [
    CommonModule,
    DriverRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class DriverModule { }
