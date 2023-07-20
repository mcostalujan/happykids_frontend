import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { GradoDisponibleDTO } from '../dto/gradoDisponibleDTO';

@Injectable({
  providedIn: 'root'
})
export class GradoService {
  private host = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getGradosDisponiblesByNivel(
    idNivel: string
  ): Observable<GradoDisponibleDTO[]> {
    let request: string;
    request = `${this.host}/grado/get/getGradosDisponiblesByNivel`;
    let body: HttpParams = new HttpParams();
    body = body.append('idNivel', idNivel);
    // console.log(request);
    // console.log(body);
    return this.http.get<GradoDisponibleDTO[]>(request, { params: body });
  }
}
