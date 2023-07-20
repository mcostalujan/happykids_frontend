import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { DetalleClaseDto } from '../dto/detalleClase';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClaseService{
  private host = environment.apiUrl;

  constructor(private http: HttpClient) {}


  public getDetalleClases(): Observable<DetalleClaseDto[]> {
    let request : string;
    request =`${this.host}/clase/get/detalle`;
    // console.log(request);
    return this.http.get<DetalleClaseDto[]>(request);
  }
}
