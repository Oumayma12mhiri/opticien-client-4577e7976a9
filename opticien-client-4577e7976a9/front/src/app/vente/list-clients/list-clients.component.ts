import { Component, Injector, OnInit, ViewChild,Output, EventEmitter, Input, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Client } from 'src/app/model/client';
import { ClientServiceService } from 'src/app/service/client-service.service';
import { VenteComponent } from '../vente.component';



@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {
  @Input() selectedClient:any;
  @Output() newItemEvent = new EventEmitter<any>();

  nomPrenom!: String;
  formValue = new FormGroup({
    reference: new FormControl(''),
    cin: new FormControl(''),
    nomPrenom: new FormControl(''),
    dateNaissance: new FormControl(''),
    age: new FormControl(''),
    email: new FormControl(''),
    adresse: new FormControl(''),
    ville: new FormControl(''),
    pays: new FormControl(''),
    numAssureSocial: new FormControl(''),
    numTel1: new FormControl(''),
    numTel2: new FormControl(''),
    groupe: new FormControl(''),
    organisme: new FormControl(''),
    matriculeFiscal: new FormControl(''),
    observations: new FormControl(''),
    //vendeur: new FormControl(''),
  })
  dataSource!: MatTableDataSource<Client>;
  client: Client = new Client();
  clientData !: any;
  listClient: any;
  displayedColumns: string[] = ['reference', 'nomPrenom', 'cin', 'solde', 'dateNaissance', 'observations', 'numTel1',  'actions'];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  
  constructor(
    private serviceClient: ClientServiceService,
    public dialogRef: MatDialogRef<ListClientsComponent>,
    public dialog: MatDialog
  ) { }


  ngOnInit(): void {
   this.loadData();
  }
  selected;

  loadData(){
    this.serviceClient.getClient().subscribe(
      (data : any) => {
        if(data){ 
        this.listClient = data;
        this.dataSource = new MatTableDataSource(this.listClient)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }}
    )
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  clicklistlient() {
    console.log("ici2")
    this.formValue.reset();
  }
  //find all client
  getAllClient() {
    this.serviceClient.getClient().subscribe(
      data => {
        this.listClient = data;
        this.dataSource = new MatTableDataSource(this.listClient)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    )
  }

  openDialogList(): void {
    this.dialogRef = this.dialog.open(ListClientsComponent, {
      height: '70%',
      width: '90%',
      data: {
        
      },
    });
    this.dialogRef.afterClosed().subscribe(_result => {
      this.serviceClient.getClient();
      this.selectedClient;
    });
  }
  countChangedHandler(selectedClient: Client) {
    this.selected = selectedClient.nomPrenom;
  }
  onClose(row: any ): void {
    this.client=row;
    this.selectedClient=row;
    this.newItemEvent.emit(row);
   // this.countChangedHandler(this.selectedClient);
    this.dialogRef.close();
  }

  selectedClientFinal(){
    this.client = this.selectedClient;
    console.log(this.selectedClient)
    this.selectedClient;
  }

}





