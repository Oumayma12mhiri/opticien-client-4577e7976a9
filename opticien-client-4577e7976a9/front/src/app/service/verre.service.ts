import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../model/client';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationServiceService } from './authentication-service.service';
import { Verre } from '../model/verre';

@Injectable({
  providedIn: 'root'
})
export class VerreService {

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

  public getVerre(): Observable<Client[]> {
    return this.http.get<Client[]>(environment.API_URL + "verre", { headers: this.getHeaders() });
  }

  public postVerre(verre: any) {
    return this.http.post<Client>(environment.API_URL + "verre", verre, { headers: this.getHeaders() });
  }

  public UpdateVerre(verre: Verre) {
    return this.http.put<any>(environment.API_URL + "verre", verre, { headers: this.getHeaders() })
  }

  public DeleteVerre(id: number) {
    return this.http.delete<any>(environment.API_URL + "verre/" + id, { headers: this.getHeaders() })
  }
}