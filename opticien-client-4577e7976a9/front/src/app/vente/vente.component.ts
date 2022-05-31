import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AddAndEditClientComponent } from '../dashboard/add-and-edit-client/add-and-edit-client.component';
import { ClientFileComponent } from '../dashboard/client-file/client-file.component';
import { ClientComponent } from '../dashboard/client.component';
import { Client } from '../model/client';
import { Divers } from '../model/divers';
import { Lentille } from '../model/lentille';
import { LunetteSolaire } from '../model/lunetteSolaire';
import { Monture } from '../model/monture';
import { Vente } from '../model/vente';
import { Verre } from '../model/verre';
import { DiversService } from '../service/divers.service';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { ListDiversComponent } from './list-divers/list-divers.component';
import { ListLentillesComponent } from './list-lentilles/list-lentilles.component';
import { ListLunetteSolaireComponent } from './list-lunette-solaire/list-lunette-solaire.component';
import { ListMontureComponent } from './list-monture/list-monture.component';
import { ListVerresComponent } from './list-verres/list-verres.component';

@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.scss']
})
export class VenteComponent implements OnInit {
  @ViewChild(ListClientsComponent) child: any;

  dataSource!: MatTableDataSource<Vente>;
  vente: Vente = new Vente();
  getClient: Client=new Client();
  getLunette: LunetteSolaire=new LunetteSolaire();
  getLentille: Lentille=new Lentille();
  getVerre: Verre=new Verre();
  getDivers: Divers=new Divers();
  getMonture: Monture=new Monture();

  venteData !: any;
  listVente: any;
  date:Date;
  time:Date;
  openClientDialogListShow=false;
  openLentilleDialogListShow=false;
  openDiversDialogListShow=false;
  openMontureDialogListShow=false;
  openVerreDialogListShow=false;
  openSolaireDialogListShow=false;
  selected;
  selectedClient:Client;
  selectedLentille:Lentille;
  displayedColumns: string[] = ['id', 'ref', 'designation', 'PUVHT', 'qte', 'remise', 'TVA', 'MT TTC', 'oeil',
    'vision', 'promis', 'peniche', 'SPH', 'CYL', 'AXE', 'ADD', 'RAY', 'DIA',
    'colProvenance', 'DLC'];

  formValue = new FormGroup({
    id: new FormControl(''),
    numFicheManuelle: new FormControl(''),
    sph: new FormControl(''),
    cyl: new FormControl(''),
    axe: new FormControl(''),
    addition: new FormControl(''),
    prisme: new FormControl(''),
    base: new FormControl(''),
    totaleVente: new FormControl(''),
    remiseVente: new FormControl('')
  
  })

  constructor(
    public client:ClientComponent,
    public dialog: MatDialog,
    public add:AddAndEditClientComponent,
    public list:ListClientsComponent,
    public clientFile:ClientFileComponent,
    public dialogRef: MatDialogRef<ListDiversComponent>,
    public dialogRef1: MatDialogRef<ListLunetteSolaireComponent>,
    public dialogRef2: MatDialogRef<ListMontureComponent>,
    public dialogRef3: MatDialogRef<ListLentillesComponent>,
    public dialogRef4: MatDialogRef<ListVerresComponent>,
    public diversService: DiversService,
    public listDivers : ListDiversComponent,
  ) { }

test(){
  this.getClient=this.child.listClient[0];
  console.log("click ",this.child)
  console.log("click ",this.child.listClient[0].nomPrenom)
  console.log("selected client ",this.selectedClient)
}

  ngOnInit(): void {
    this.date=new Date();
  }

  openDialog(): void {
    this.client.openDialog();
  }

  clientChangedHandler(event:any) {
    this.openClientDialogListShow=false;
    this.getClient = event;
  }

  lentilleChangedHandler(event:any) {
    console.log("lentille ",event);
    this.openLentilleDialogListShow=false;
    this.getLentille = event;
  }

  LunetteChangedHandler(event:any) {
    console.log("Lunette ",event);
    this.openSolaireDialogListShow=false;
    this.getLunette = event;
  }
  

  VerreChangedHandler(event:any) {
    console.log("Verre ",event);
    this.openVerreDialogListShow=false;
    this.getVerre = event;
  }
  
  MontureChangedHandler(event:any) {
    console.log("Monture ",event);
    this.openMontureDialogListShow=false;
    this.getMonture = event;
  }
  
  DiversChangedHandler(event:any) {
    console.log("Divers ",event);
    this.openDiversDialogListShow=false;
    this.getDivers = event;
  }
  
  addClient(){
    this.add.clickAddClient();
  }
  listClient(){
    console.log("ici")
    this.list.getAllClient();
  }
  openDialogFile(): void {
    this.clientFile.openDialogFile();
  }

  openClientDialogList(): void {
   this.openClientDialogListShow=true;
   this.openLentilleDialogListShow=false;
   this.openDiversDialogListShow=false;
   this.openMontureDialogListShow=false;
   this.openVerreDialogListShow=false;
   this.openSolaireDialogListShow=false;
  }
  openLunetteDialogList(): void {
    this.openSolaireDialogListShow=true;
    this.openClientDialogListShow=false;
    this.openLentilleDialogListShow=false;
    this.openDiversDialogListShow=false;
    this.openMontureDialogListShow=false;
    this.openVerreDialogListShow=false;
  }
  openLentilleDialogList(): void {
   this.openLentilleDialogListShow=true;
   this.openClientDialogListShow=false;
   this.openDiversDialogListShow=false;
   this.openMontureDialogListShow=false;
   this.openVerreDialogListShow=false;
   this.openSolaireDialogListShow=false;
  }
  openVerreDialogList(): void {
    this.openVerreDialogListShow=true;
    this.openClientDialogListShow=false;
   this.openLentilleDialogListShow=false;
   this.openDiversDialogListShow=false;
   this.openMontureDialogListShow=false;
   this.openSolaireDialogListShow=false;
  }
  openMontureDialogList(): void {
    this.openMontureDialogListShow=true;
    this.openClientDialogListShow=false;
    this.openLentilleDialogListShow=false;
    this.openDiversDialogListShow=false;
    this.openSolaireDialogListShow=false;
    this.openVerreDialogListShow=false;
  }

  openDiversDialogList(): void {
    this.openDiversDialogListShow=true;
    this.openClientDialogListShow=false;
    this.openLentilleDialogListShow=false;
    this.openMontureDialogListShow=false;
    this.openSolaireDialogListShow=false;
    this.openVerreDialogListShow=false;
  }


/*  openDialogListLunette(): void {
    this.dialogRef1 = this.dialog.open(ListLunetteSolaireComponent, {
      height: '70%',
      width: '90%',
      data: {
        
      },
    });
    this.dialogRef.afterClosed().subscribe(_result => {
      this.listDivers.loadData();
    });
  }

  openDialogListDivers(): void {
    this.dialogRef = this.dialog.open(ListDiversComponent, {
      height: '70%',
      width: '90%',
      data: {
        
      },
    });
    this.dialogRef.afterClosed().subscribe(_result => {
      this.listDivers.loadData();
    });
  }

  openDialogListMonture(): void {
    this.dialogRef2 = this.dialog.open(ListMontureComponent, {
      height: '70%',
      width: '90%',
      data: {
        
      },
    });
    this.dialogRef.afterClosed().subscribe(_result => {
      this.listDivers.loadData();
    });
  }

  openDialogListLentille(): void {
    this.dialogRef3 = this.dialog.open(ListLentillesComponent, {
      height: '70%',
      width: '90%',
      data: {
        
      },
    });
    this.dialogRef.afterClosed().subscribe(_result => {
      this.listDivers.loadData();
    });
  }

  openDialogListVerre(): void {
    this.dialogRef4 = this.dialog.open(ListVerresComponent, {
      height: '70%',
      width: '90%',
      data: {
        
      },
    });
    this.dialogRef.afterClosed().subscribe(_result => {
      this.listDivers.loadData();
    });
  }*/

}
