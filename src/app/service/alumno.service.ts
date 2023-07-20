import { AlumnoDto } from './../dto/alumnoDto';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DetalleAlumnoReporteAnual } from '../dto/detalleAlumnoReporteAnual';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private host = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public registerAlumno(alumnoDto: AlumnoDto): Observable<AlumnoDto> {
    let request : string;
    request =`${this.host}/alumno/register`;
    // console.log(request);
    return this.http.post<AlumnoDto>(request, alumnoDto);
  }

  public getAlumnosByParamsReporteAnual(
    idNivel: string,
    idGrado: string,
    idSeccion: string,
    year: string
  ): Observable<DetalleAlumnoReporteAnual[]> {
    let request: string;
    request = `${this.host}/alumno/get/getAlumnosByParamsReporteAnual`;
    let body: HttpParams = new HttpParams();
    body = body.append('idNivel', idNivel);
    body = body.append('idGrado', idGrado);
    body = body.append('idSeccion', idSeccion);
    body = body.append('year', year);
    // console.log(request);
    // console.log(body);
    return this.http.get<DetalleAlumnoReporteAnual[]>(request, { params: body });
  }

}
