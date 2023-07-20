import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { NivelDisponibleDTO } from '../dto/nivelDisponibleDTO';

@Injectable({
  providedIn: 'root'
})
export class NivelService {
  private host = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getNivelesDisponibles(): Observable<NivelDisponibleDTO[]> {
    let request: string;
    request = `${this.host}/nivel/get/nivelesDisponibles`;
    // console.log(request);
    // console.log(body);
    return this.http.get<NivelDisponibleDTO[]>(request);
  }
}
