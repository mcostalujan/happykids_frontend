import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { SeccionDiponibleDTO } from '../dto/seccionDisponibleDTO';

@Injectable({
  providedIn: 'root'
})
export class SeccionService {
  private host = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getSeccionesDisponiblesByNivelAndGrado(
    idNivel: string,
    idGrado: string
  ): Observable<SeccionDiponibleDTO[]> {
    let request: string;
    request = `${this.host}/seccion/get/getSeccionesDisponiblesByNivelAndGrado`;
    let body: HttpParams = new HttpParams();
    body = body.append('idNivel', idNivel);
    body = body.append('idGrado', idGrado);
    // console.log(request);
    // console.log(body);
    return this.http.get<SeccionDiponibleDTO[]>(request, { params: body });
  }
}
