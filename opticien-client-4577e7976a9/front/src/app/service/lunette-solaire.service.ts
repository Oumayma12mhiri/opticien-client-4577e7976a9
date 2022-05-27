import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../model/client';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationServiceService } from './authentication-service.service';
import { LunetteSolaire } from '../model/lunetteSolaire';

@Injectable({
  providedIn: 'root'
})
export class LunetteSolaireService {

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

  public getLunetteSolaire(): Observable<Client[]> {
    return this.http.get<Client[]>(environment.API_URL + "lunette", { headers: this.getHeaders() });
  }

  public postLunetteSolaire(lunetteSolaire: any) {
    return this.http.post<Client>(environment.API_URL + "lunette", lunetteSolaire, { headers: this.getHeaders() });
  }

  public UpdateLunetteSolaire(lunetteSolaire: LunetteSolaire) {
    return this.http.put<any>(environment.API_URL + "lunette", lunetteSolaire, { headers: this.getHeaders() })
  }

  public DeleteLunetteSolaire(id: number) {
    return this.http.delete<any>(environment.API_URL + "lunette/" + id, { headers: this.getHeaders() })
  }
}
