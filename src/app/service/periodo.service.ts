import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeriodoService {
  private host = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getYearsDisponibles(): Observable<String[]> {
    let request: string;
    request = `${this.host}/periodo/get/yearsDisponibles`;
    // console.log(request);
    // console.log(body);
    return this.http.get<String[]>(request);
  }
}
