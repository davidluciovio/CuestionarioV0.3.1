import { Injectable } from '@angular/core';
import { Empleado } from '../interfaces/empleado.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmpleadosService {
  public estado: boolean = false;
  private apiURL = environment.apiURL;

  public obtenerNomina(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.apiURL);
  }

  private _lista_empleados: Observable<Empleado[]> = this.obtenerNomina();
  // private _lista_empleados: Empleado[] = [];
  
  // get lista_empleados(){
  //   return [...this._lista_empleados];
  // }

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient ) {
    
  }
  

  // buscar_nomina(nomina: number){
  //   if (nomina === this.lista_empleados[0].Nomina) {
  //     if (this.lista_empleados[0].isComplete === 0) {
        

  //       this.estado = true;
  //       if (this.estado) {
  //         this.router.navigate(['Cuestionario']);
  //       }
        

  //       // console.log('cuestionario' , this.estado);
  //     } else {window.alert('Ya realizaste el cuestionario');} 
  //   } else {window.alert("La nomina no existe");}


  // }
  
}
  // return console.log('nomina mal');
