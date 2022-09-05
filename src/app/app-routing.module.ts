import { NgModule } from '@angular/core';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DriversDashboardComponent } from './drivers-dashboard/drivers-dashboard.component';
import { LoginComponent } from './admin/login/login.component';
import { SignupComponent } from './admin/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ConnecteComponent } from './driver/connecte/connecte.component';
import { DeconnexionComponent } from './driver/deconnexion/deconnexion.component';
import { DeliverydetailsComponent } from './admin/deliverydetails/deliverydetails.component';
import { CommandeComponent } from './commande/commande.component';
import { MapTrackerComponent } from './map-tracker/map-tracker.component';
const routes: Routes = [{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }, { path: 'driver', loadChildren: () => import('./driver/driver.module').then(m => m.DriverModule)},
{path:'home',component:HomeComponent},
{path:'',component:HomeComponent},
{path:'DriversDa',component:DriversDashboardComponent},
{path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:'connexion', component:ConnecteComponent},
{path:'signupp', component:DeconnexionComponent},
{path:'Deliverydetails',component:DeliverydetailsComponent},
{path:'Commande', component:CommandeComponent},
{path: 'Map', component:MapTrackerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules}), SweetAlert2Module.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
