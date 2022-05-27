import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationServiceService } from './authentication-service.service';
import { Fournisseur } from '../model/fournisseur';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

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

  public getFournisseur(): Observable<Fournisseur[]> {
    return this.http.get<Fournisseur[]>(environment.API_URL + "fournisseur", { headers: this.getHeaders() });
  }

  public postFournisseur(frs: any) {
    return this.http.post<Fournisseur>(environment.API_URL + "fournisseur", frs, { headers: this.getHeaders() });
  }

  public UpdateFournisseur(frs: Fournisseur, id: number) {
    console.log(id);
    return this.http.put<any>(environment.API_URL + "fournisseur", frs, { headers: this.getHeaders() })
  }

  public DeleteFournisseur(id: number) {
    return this.http.delete<any>(environment.API_URL + "fournisseur/" + id, { headers: this.getHeaders() })
  }

  public getFournisseurByCategorieName(name: string): Observable<Fournisseur[]> {
    return this.http.get<Fournisseur[]>(environment.API_URL + "fournisseur/find-by-categorie-name/"+ name, { headers: this.getHeaders() });
  }
}
