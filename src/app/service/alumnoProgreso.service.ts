import { AlumnoDto } from '../dto/alumnoDto';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DetalleAlumnoPorClase } from '../dto/detalleAlumnosPorClase';

@Injectable({
  providedIn: 'root',
})
export class AlumnoProgresoService {
  private host = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getDetalleAlumnosPorClase(
    idClase: string
  ): Observable<DetalleAlumnoPorClase[]> {
    let request: string;
    request = `${this.host}/alumno/progreso/get/getAlumnosPorClase`;
    let body: HttpParams = new HttpParams();
    body = body.append('idClase', idClase);
    // console.log(request);
    // console.log(body);
    return this.http.get<DetalleAlumnoPorClase[]>(request, { params: body });
  }

  public getDetalleAlumnoByIdClaseAndIdAlumno(
    idClase: string,
    idAlumno: string
  ): Observable<DetalleAlumnoPorClase> {
    let request: string;
    request = `${this.host}/alumno/progreso/get/getDetalleAlumnoByIdClaseAndIdAlumno`;
    let body: HttpParams = new HttpParams();
    body = body.append('idClase', idClase);
    body = body.append('idAlumno', idAlumno);
    // console.log(request);
    // console.log(body);
    return this.http.get<DetalleAlumnoPorClase>(request, { params: body });
  }

  public exportarInformeAcademicoAlumno(idAlum:string, year:string): Observable<any> {
    let url: string;
    url = `${this.host}/alumno/progreso/export/InformeAcademicoAlumno/${idAlum}/${year}`;
    // console.log(request);

    const requestOptions: any = {
      observe: 'response',
      responseType: 'blob',
      headers: new HttpHeaders({
        Accept:
          'application/octet-stream',
      }),
    };


    return this.http.get(url, requestOptions);

    // return this.http.get<Blob>(request);
  }
}
