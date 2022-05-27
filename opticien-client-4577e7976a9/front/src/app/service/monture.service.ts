import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../model/client';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationServiceService } from './authentication-service.service';
import { Monture } from '../model/monture';

@Injectable({
  providedIn: 'root'
})
export class MontureService {

  constructor(private http: HttpClient, private authService: AuthenticationServiceService) { }
  public getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      "Authorization": "Bearer " + this.authService.getToken()
    });
    return headers;
  }

  public getMonture(): Observable<Client[]> {
    return this.http.get<Client[]>(environment.API_URL + "monture", { headers: this.getHeaders() });
  }

  public postMonture(monture: any) {
    return this.http.post<Client>(environment.API_URL + "monture", monture, { headers: this.getHeaders() });
  }

  public UpdateMonture(monture: Monture) {
    return this.http.put<any>(environment.API_URL + "monture", monture, { headers: this.getHeaders() })
  }

  public DeleteMonture(id: number) {
    return this.http.delete<any>(environment.API_URL + "monture/" + id, { headers: this.getHeaders() })
  }
}
