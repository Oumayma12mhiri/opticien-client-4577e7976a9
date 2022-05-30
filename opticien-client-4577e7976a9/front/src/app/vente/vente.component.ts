import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AddAndEditClientComponent } from '../dashboard/add-and-edit-client/add-and-edit-client.component';
import { ClientFileComponent } from '../dashboard/client-file/client-file.component';
import { ClientComponent } from '../dashboard/client.component';
import { Client } from '../model/client';
import { Vente } from '../model/vente';
import { ListClientsComponent } from './list-clients/list-clients.component';

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
  venteData !: any;
  listVente: any;
  date:Date;
  time:Date;
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
selected;
selectedClient:Client;
  constructor(
    public client:ClientComponent,
    public dialog: MatDialog,
    public add:AddAndEditClientComponent,
    public list:ListClientsComponent,
    public clientFile:ClientFileComponent
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

  countChangedHandler(event:any) {
 //   this.selected = event.nomPrenom;
    console.log("selected , event  ", event);
    console.log("child ",this.child);
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
  openDialogList(): void {
    this.list.openDialogList();
  }

}
