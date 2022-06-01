import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../model/client';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationServiceService } from './authentication-service.service';
import { Verre } from '../model/verre';
import { Visite } from '../model/visite';

@Injectable({
  providedIn: 'root'
})
export class VisiteService {

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



  public postVisite(visite: any) {
    return this.http.post<Client>(environment.API_URL + "visiteclient", visite, { headers: this.getHeaders() });
  }

  public UpdateVisite(visite: Visite) {
    return this.http.put<any>(environment.API_URL + "visiteclient", visite, { headers: this.getHeaders() })
  }

  public DeleteVisite(id: number) {
    return this.http.delete<any>(environment.API_URL + "visiteclient/" + id, { headers: this.getHeaders() })
  }
  public getVisiteOfClient(id: number) {
    return this.http.get<any>(environment.API_URL + "visiteclient/find-by-client/" + id, { headers: this.getHeaders() })
  }
}