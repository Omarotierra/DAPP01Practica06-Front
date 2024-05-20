/*import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmpleadosComponent } from './empleados/empleados.component';

  const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'empleados', component: EmpleadosComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirigir al inicio de sesión por defecto
    //{ path: '**', redirectTo: 'login' } // Redirigir a inicio de sesión para cualquier ruta desconocida
  ];
  
/*
const routes: Routes = [
  //{ path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'a1', component: A1Component },
  { path: 'menu', component: A1Component },
  { path: 'a2', component: A2Component },
  { path: 'a3', component: A3Component },
  { path: '**', redirectTo: 'login'},
];*/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
