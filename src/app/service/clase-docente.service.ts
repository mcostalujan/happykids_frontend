import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { DetalleClaseDto } from '../dto/detalleClase';
import { Observable } from 'rxjs';
import { DetalleClasesDocente } from '../dto/detalleClasesDocente';

@Injectable({
  providedIn: 'root'
})
export class ClaseDocenteService {

  private host = environment.apiUrl;

  constructor(private http: HttpClient) {}


  public getDetalleClasesDocente(idDocente: string, idPeriodo: string): Observable<DetalleClasesDocente[]> {
    let request : string;
    request =`${this.host}/clase-docente/get/clasesDocentePeriodo`;
    let body: HttpParams = new HttpParams();
    body = body.append('idDocente' , '8');
    body = body.append('idPeriodo' , '1');
    // console.log(request);
    // console.log(body);
    return this.http.get<DetalleClasesDocente[]>(request,{params: body});
  }
}
