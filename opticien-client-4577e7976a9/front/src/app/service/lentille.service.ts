import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../model/client';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationServiceService } from './authentication-service.service';
import { Lentille } from '../model/lentille';

@Injectable({
  providedIn: 'root'
})
export class LentilleService {

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

  public getLentille(): Observable<Client[]> {
    return this.http.get<Client[]>(environment.API_URL + "lentille", { headers: this.getHeaders() });
  }

  public postLentille(lentille: any) {
    return this.http.post<Client>(environment.API_URL + "lentille", lentille, { headers: this.getHeaders() });
  }

  public UpdateLentille(lentille: Lentille) {
    return this.http.put<any>(environment.API_URL + "lentille", lentille, { headers: this.getHeaders() })
  }

  public DeleteLentille(id: number) {
    return this.http.delete<any>(environment.API_URL + "lentille/" + id, { headers: this.getHeaders() })
  }}
