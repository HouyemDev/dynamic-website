import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnecteComponent } from './connecte/connecte.component';
import { DeconnexionComponent } from './deconnexion/deconnexion.component';
import { DriverComponent } from './driver.component';

const routes: Routes = [
{path:'', redirectTo:'connexion', pathMatch:'full'},
{ path: 'Driver', component: DriverComponent },
{path:'connexion', component:ConnecteComponent},
{path:'signupp', component:DeconnexionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriverRoutingModule { }
