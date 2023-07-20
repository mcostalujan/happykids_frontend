import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { DetalleAlumnoCompetencia } from '../dto/detalleAlumnoCompetencia';
import { DetalleAlumnoCapacidad } from '../dto/detalleAlumnoCapacidad';
import { AlumnoNotaCapaDTO } from '../dto/alumnoNotaCapaDTO';

@Injectable({
  providedIn: 'root'
})
export class AlumnoCapacidadService {
  private host = environment.apiUrl;

  constructor(private http: HttpClient) {}


  public getDetalleCapacidadPorAcompe(idAcompe: string): Observable<DetalleAlumnoCapacidad[]> {
    let request : string;
    request =`${this.host}/alumno-capacidad/get/getDetalleCapacidadPorAcompe`;
    let body: HttpParams = new HttpParams();
    body = body.append('idAcompe' , idAcompe);
    // console.log(request);
    // console.log(body);
    return this.http.get<DetalleAlumnoCapacidad[]>(request,{params: body});
  }



  public updateNotaCapa(idAcompe: string, idCapacidad:string, notaCapacidad:string): Observable<AlumnoNotaCapaDTO> {
    let request : string;
    request =`${this.host}/alumno-capacidad/post/updateNotaCapa`;
    let body: HttpParams = new HttpParams();
    body = body.append('idAcompe' , idAcompe);
    body = body.append('idCapacidad' , idCapacidad);
    body = body.append('notaCapacidad' , notaCapacidad);
    console.log('Enviando petición');
    console.log(request);
    console.log(body);
    return this.http.post<AlumnoNotaCapaDTO>(request, body);
  }

  public calculoPromedioCapacidadadesPorIdClaseIdAprog(idClase: string, idAprog: string): Observable<any> {
    let request : string;
    request =`${this.host}/alumno-capacidad/post/calculoPromedioCapacidadadesPorIdClaseIdAprog/${idClase}/${idAprog}/${'SYSTEM'}`;
    // let body: HttpParams = new HttpParams();
    // body = body.append('idClase' , idClase);
    // body = body.append('idAprog' , idAprog);
    // body = body.append('usuarioModi' , 'SYSTEM');
    // console.log(request);
    // console.log(body);
    return this.http.post<any>(request,null);
  }


}
