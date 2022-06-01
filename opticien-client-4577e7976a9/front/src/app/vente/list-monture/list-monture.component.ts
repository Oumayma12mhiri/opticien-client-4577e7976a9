import { Component, Input, OnInit, Output, ViewChild,EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Monture } from 'src/app/model/monture';
import { MontureService } from 'src/app/service/monture.service';

@Component({
  selector: 'app-list-monture',
  templateUrl: './list-monture.component.html',
  styleUrls: ['./list-monture.component.scss']
})
export class ListMontureComponent implements OnInit {
  @Input() selectedMonture:any;
  @Output() newItemEvent = new EventEmitter<any>();

  dataSource!: MatTableDataSource<Monture>;
  monture: Monture = new Monture();
  montureData !: any;
  listmonture: any;
  displayedColumns: string[] = ['reference','marque','prixAchat', 'prixVente', 'quantite' ,'fournisseur','actions']

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  selected;

  formValue = new FormGroup({
    reference: new FormControl(''),
    marque: new FormControl(''),
    prixAchat: new FormControl(''),
    prixVente: new FormControl(''),
    quantite: new FormControl(''),
    fournisseur: new FormControl('')
  })


  constructor(
    public dialog: MatDialog,
    public montureService: MontureService,
    public dialogRef: MatDialogRef<ListMontureComponent>,
  ) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    this.montureService.getMonture().subscribe(
      (data : any) => {
        console.log("data",data)
        if(data){ 
        this.listmonture = data;
        this.dataSource = new MatTableDataSource(this.listmonture)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }}
    )
  }

  MontureChangedHandler(selectedMonture: Monture) {
    this.selected = selectedMonture;
  }

  onCloseMonture(row: any ): void {
    console.log("row monture",row);
    this.selectedMonture=row;
    this.newItemEvent.emit(row);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
