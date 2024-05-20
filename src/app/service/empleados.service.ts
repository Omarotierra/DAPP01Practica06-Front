/*import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from './empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  private apiUrl = 'http://localhost:8080/DAPP01Practica05-0.0.1-SNAPSHOT/api/v1/empleado/';

  constructor(private http: HttpClient) {}



  private createHeaders(): HttpHeaders {
    const username = 'ejemplo@gmail.com';
    const password = 'ejemplo';
    const auth = btoa(`${username}:${password}`);
    return new HttpHeaders({
      'Authorization': `Basic ${auth}`
    });
  }

  getEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.apiUrl, { headers: this.createHeaders() });
  }

  getEmpleado(id: number): Observable<Empleado> {
    return this.http.get<Empleado>(`${this.apiUrl}${id}`, { headers: this.createHeaders() });
  }

  addEmpleado(empleado: Empleado): Observable<Empleado> {
    return this.http.post<Empleado>(this.apiUrl, empleado, { headers: this.createHeaders() });
  }

  deleteEmpleado(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${id}`, { headers: this.createHeaders() });
  }
}
*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from './empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  //private apiUrl = 'http://localhost:8080/DAPP01Practica05-0.0.1-SNAPSHOT/api/v1/empleado/';
  private apiUrl = "http://localhost:8080/api/v1/empleado/";

  constructor(private http: HttpClient) { }

  getEmpleados(): Observable<Empleado[]> {
   return this.http.get<Empleado[]>(this.apiUrl);
  }

  getEmpleado(clave: number): Observable<Empleado> {
    return this.http.get<Empleado>(`${this.apiUrl}${clave}`);
  }

  addEmpleado(empleado: Empleado): Observable<Empleado> {
    return this.http.post<Empleado>(this.apiUrl, empleado);
  }

  deleteEmpleado(clave: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${clave}`);
  }
}



