import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DetalleAlumnoCompetencia } from '../dto/detalleAlumnoCompetencia';

@Injectable({
  providedIn: 'root'
})
export class AlumnoCompetenciaService {
  private host = environment.apiUrl;

  constructor(private http: HttpClient) {}


  public getDetalleACompeByIdClaseAndIdAlumno(idClase: string, idAlumno: string): Observable<DetalleAlumnoCompetencia[]> {
    let request : string;
    request =`${this.host}/alumnoCompetencia/get/getDetalleACompeByIdClaseAndIdAlumno`;
    let body: HttpParams = new HttpParams();
    body = body.append('idClase' , idClase);
    body = body.append('idAlumno' , idAlumno);
    // console.log(request);
    // console.log(body);
    return this.http.get<DetalleAlumnoCompetencia[]>(request,{params: body});
  }



}
