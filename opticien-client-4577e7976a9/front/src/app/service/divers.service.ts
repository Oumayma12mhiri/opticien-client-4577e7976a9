import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../model/client';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationServiceService } from './authentication-service.service';
import { Monture } from '../model/monture';
import { Divers } from '../model/divers';

@Injectable({
  providedIn: 'root'
})
export class DiversService {

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

  public getDivers(): Observable<Divers[]> {
    return this.http.get<Divers[]>(environment.API_URL + "divers", { headers: this.getHeaders() });
  }

  public postDivers(divers: any) {
    
    return this.http.post<Divers>(environment.API_URL + "divers", divers, { headers: this.getHeaders() });
  }

  public UpdateDivers(diver: Divers) {
    return this.http.put<any>(environment.API_URL + "divers", diver, { headers: this.getHeaders() })
  }

  public DeleteDivers(id: number) {
    return this.http.delete<any>(environment.API_URL + "divers/" + id, { headers: this.getHeaders() })
  }
}
