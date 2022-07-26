import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseCuestionarioComponent } from './cuestionarios/base-cuestionario/base-cuestionario.component';
import { LoginComponent } from './empleados/login/login.component';


const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },{
    path:'Cuestionario',
    component: BaseCuestionarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
