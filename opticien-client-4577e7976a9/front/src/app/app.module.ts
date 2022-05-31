import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ClientComponent } from './dashboard/client.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table' ;
import { HttpClientModule } from '@angular/common/http';
import { ClientServiceService } from './service/client-service.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddAndEditClientComponent } from './dashboard/add-and-edit-client/add-and-edit-client.component';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ClientFileComponent } from './dashboard/client-file/client-file.component';
import { MatTabsModule } from '@angular/material/tabs';
import { RegisterComponent } from './authentication/register/register.component';
import { VisiteServiceService } from './service/visite-service.service';
import { OrganismeComponent } from './dashboard/organisme/organisme.component';
import { OrganismeServiceService } from './service/organisme-service.service';
import { GroupeFamComponent } from './dashboard/groupe-fam/groupe-fam.component';
import { GroupeFamServiceService } from './service/groupe-fam-service.service';
import { NewVisitComponent } from './dashboard/client-file/new-visit/new-visit.component';
import { VenteComponent } from './vente/vente.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';

import { DiversComponent } from './divers/divers.component';
import { MontureComponent } from './monture/monture.component';
import { VerreComponent } from './verre/verre.component';
import { LentilleComponent } from './lentille/lentille.component';
import { AddEditFRSComponent } from './fournisseur/add-edit-frs/add-edit-frs.component';
import { AddEditDiversComponent } from './divers/add-edit-divers/add-edit-divers.component';
import { AddEditMontureComponent } from './monture/add-edit-monture/add-edit-monture.component';
import { LunetteSolaireComponent } from './lunette-solaire/lunette-solaire.component';
import { AddEditLSComponent } from './lunette-solaire/add-edit-ls/add-edit-ls.component';
import { AddEditVerreComponent } from './verre/add-edit-verre/add-edit-verre.component';
import { MontureService } from './service/monture.service';
import { AddEditLentilleComponent } from './lentille/add-edit-lentille/add-edit-lentille.component';
import { ListClientsComponent } from './vente/list-clients/list-clients.component';
import { ListVerresComponent } from './vente/list-verres/list-verres.component';
import { ListLentillesComponent } from './vente/list-lentilles/list-lentilles.component';
import { ListLunetteSolaireComponent } from './vente/list-lunette-solaire/list-lunette-solaire.component';
import { ListMontureComponent } from './vente/list-monture/list-monture.component';
import { ListDiversComponent } from './vente/list-divers/list-divers.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ClientComponent,
    SidenavComponent,
    AddAndEditClientComponent,
    AuthenticationComponent,
    ClientFileComponent,
    RegisterComponent,
    OrganismeComponent,
    GroupeFamComponent,
    NewVisitComponent,
    VenteComponent,
    FournisseurComponent,
    DiversComponent,
    MontureComponent,
    VerreComponent,
    LentilleComponent,
    AddEditFRSComponent,
    AddEditDiversComponent,
    AddEditMontureComponent,
    LunetteSolaireComponent,
    AddEditLSComponent,
    AddEditVerreComponent,
    AddEditLentilleComponent,
    ListClientsComponent,
    ListVerresComponent,
    ListLentillesComponent,
    ListLunetteSolaireComponent,
    ListMontureComponent,
    ListDiversComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatMenuModule,  
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatTabsModule,
    
  ],
 
  providers: [ClientServiceService,ListClientsComponent,MontureService,AuthenticationComponent,VisiteServiceService,ClientFileComponent,OrganismeServiceService,OrganismeComponent,{provide:MatDialogRef,useValue:[]},GroupeFamComponent,GroupeFamServiceService,NewVisitComponent,ClientComponent,AddAndEditClientComponent,ListDiversComponent,VenteComponent],
  
  bootstrap: [AppComponent],
})
export class AppModule {}
