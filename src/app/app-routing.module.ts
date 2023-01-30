import { EditarVehiculosComponent } from './modules/editar-vehiculos/editar-vehiculos.component';
import { HomeComponent } from './modules/home/home.component';
import { VehiculosComponent } from './modules/vehiculos/vehiculos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'vehiculos', component: VehiculosComponent },
  { path:"editarVehiculos/:id",component: EditarVehiculosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
