import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseCestionarioComponent } from './base-cestionario/base-cestionario.component';
import { BaseCuestionarioComponent } from './base-cuestionario/base-cuestionario.component';



@NgModule({
  declarations: [
    BaseCestionarioComponent,
    BaseCuestionarioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CuestionariosModule { }
