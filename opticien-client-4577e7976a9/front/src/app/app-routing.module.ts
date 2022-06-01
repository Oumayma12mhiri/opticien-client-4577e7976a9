import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './authentication/auth.guard';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RegisterComponent } from './authentication/register/register.component';
import { ClientComponent } from './dashboard/client.component';
import { DiversComponent } from './divers/divers.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { HomeComponent } from './home/home.component';
import { LentilleComponent } from './lentille/lentille.component';
import { LunetteSolaireComponent } from './lunette-solaire/lunette-solaire.component';

import { MontureComponent } from './monture/monture.component';
import { ListClientsComponent } from './vente/list-clients/list-clients.component';
import { VenteComponent } from './vente/vente.component';
import { VerreComponent } from './verre/verre.component';

const routes: Routes = [
  { path: '', redirectTo: 'authentification', pathMatch: 'full' },
  { path: 'authentification', component: AuthenticationComponent },
  { path: 'home', component: HomeComponent },
  { path: 'vente', component: VenteComponent },
  { path: 'dashboard', component: ClientComponent},
  { path: 'listClient', component: ListClientsComponent},
  { path: 'frs', component: FournisseurComponent},
  { path: 'divers', component: DiversComponent},
  { path: 'monture', component: MontureComponent},
  { path: 'lunetteSolaire', component: LunetteSolaireComponent},
  { path: 'verre', component: VerreComponent},
  { path: 'lentille', component: LentilleComponent},
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
