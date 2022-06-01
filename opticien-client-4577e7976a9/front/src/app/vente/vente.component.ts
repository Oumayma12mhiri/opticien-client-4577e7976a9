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

const USER_DATA = [
  
];

const COLUMNS_SCHEMA = [
  {
    key: 'ref',
    type: 'disabled',
    label: 'Ref',
  },
  {
    key: 'designation',
    type: 'disabled',
    label: 'Désignation',
  },
  {
    key: 'puvht',
    type: 'disabled',
    label: 'PUVHT',
  },
  {
    key: 'qte',
    type: 'number',
    label: 'Qte',
  },
  {
    key: 'remise',
    type: 'text',
    label: 'Remise %',
  },
  {
    key: 'tva',
    type: 'text',
    label: 'TVA',
  },
  {
    key: 'mttc',
    type: 'text',
    label: 'MT TTC',
  },
  {
    key: 'isEdit',
    type: 'isEdit',
    label: '',
  },
];
@Component({
  selector: 'app-vente',
  templateUrl: './vente.component.html',
  styleUrls: ['./vente.component.scss']
})
export class VenteComponent implements OnInit {
  @ViewChild(ListClientsComponent) child: any;

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
 
  prixFinale: number;
  prixSansRemise: number;
  totaleTTC: number;
  totaleRemise: number;
  dataSource: MatTableDataSource<Vente>;
  displayedColumns1: string[] = COLUMNS_SCHEMA.map((col) => col.key);
  dataSource1 = USER_DATA;
  columnsSchema: any = COLUMNS_SCHEMA;

  displayedColumns: string[] = ['ref', 'designation', 'PUVHT', 'qte', 'remise', 'TVA', 'MT TTC', 'action'];

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
    remiseVente: new FormControl(''),
    totalTtc: new FormControl('')
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

  addRow() {
    const newRow = {
      id: Date.now(),
      ref: '',
      designation: '',
      puvht: 0,
      qte: 1,
      remise:0,
      tva: 0,
      mttc:0,
      isEdit: true
    };
    this.dataSource1 = [newRow, ...this.dataSource1];
  }

  onBlur(element:any): void {
    this.prixFinale=(element.puvht+(element.puvht*element.tva)/100)*element.qte;
    console.log("prixFinale1 = ",this.prixFinale);
    this.prixFinale=this.prixFinale-(this.prixFinale*element.remise)/100;
    console.log("prixFinale2 = ",this.prixFinale);
    this.calculTotalPrix(element);
}

calculTotalPrix(element:any){
  this.prixFinale;
  this.prixSansRemise=0;
  this.totaleTTC=0;
  this.totaleRemise=0;
  this.dataSource1.forEach(res => {
    if(element.id===res.id) {
      res.mttc=this.prixFinale;
      console.log("in if:",res.mttc);
    }
    this.prixSansRemise=this.prixSansRemise+(res.puvht+(res.puvht*res.tva)/100)*res.qte;
    this.totaleTTC=this.totaleTTC+res.mttc;
    this.totaleRemise= this.prixSansRemise-this.totaleTTC;
    console.log("prixSansRemise",this.prixSansRemise);
    console.log("totaleTTC",this.totaleTTC);    
    console.log("totaleRemise",this.totaleRemise);  
  });
}
  removeRow(id) {
    this.dataSource1 = this.dataSource1.filter((u) => u.id !== id);
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
    const newRow = {
      id: event.id,
      ref: event.code, 
      designation: event.description,
      puvht: event.prixVente,
      qte:1,
      remise:0,
      tva: 0,
      mttc:0
    };
    this.dataSource1 = [newRow, ...this.dataSource1];
    console.log("lentille dataSource1 ",this.dataSource1);
    this.openLentilleDialogListShow=false;
    this.getLentille = event;
  }

  LunetteChangedHandler(event:any) {
    const newRow = {
      id: event.id,
      ref: event.ref,
      designation: event.marque,
      puvht: event.prixVente,
      qte:1,
      remise:0,
      tva: 0,
      mttc:0
    };
    console.log("lunette newRow ",newRow);
    this.dataSource1 = [newRow, ...this.dataSource1];
    this.openSolaireDialogListShow=false;
    this.getLunette = event;
  }

  VerreChangedHandler(event:any) {
    const newRow = {
      id: event.id,
      ref: event.code,
      designation: event.description,
      puvht: event.prixVente,
      qte:1,
      remise:0,
      tva: 0,
      mttc:0
    };
    console.log("verre newRow ",newRow);
    this.dataSource1 = [newRow, ...this.dataSource1];
    this.openVerreDialogListShow=false;
    this.getVerre = event;
  }
  
  MontureChangedHandler(event:any) {
    console.log("monture event ",event);
    const newRow = {
      id: event.id,
      ref: event.reference,
      designation: event.marque,
      puvht: event.prixVente,
      qte:1,
      remise:0,
      tva: 0,
      mttc:0
    };
    this.dataSource1 = [newRow, ...this.dataSource1];
    console.log("monture dataSource1 ",this.dataSource1);
    this.openMontureDialogListShow=false;
    this.getMonture = event;
  }
  
  DiversChangedHandler(event:any) {
    console.log(this.dataSource1)
    const newRow = {
      id: event.id,
      ref: event.reference,
      designation: event.name,
      puvht: event.prixVente,
      qte:1,
      remise:0,
      tva: 0,
      mttc:0
    };
    console.log("divers newRow ",newRow);
    this.dataSource1 = [newRow, ...this.dataSource1];
    this.openDiversDialogListShow=false;
    this.getDivers = event;
  }
  
  addClient(){
    this.add.clickAddClient();
  }
  listClient(){
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

}
