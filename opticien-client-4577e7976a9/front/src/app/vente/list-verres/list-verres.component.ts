import { Component, Input, OnInit, Output,EventEmitter, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Verre } from 'src/app/model/verre';
import { VerreService } from 'src/app/service/verre.service';

@Component({
  selector: 'app-list-verres',
  templateUrl: './list-verres.component.html',
  styleUrls: ['./list-verres.component.scss']
})
export class ListVerresComponent implements OnInit {
  @Input() selectedVerre:any;
  @Output() newItemEvent = new EventEmitter<any>();

  dataSource!: MatTableDataSource<Verre>;
  verre: Verre = new Verre();
  VerreData !: any;
  listVerre: any;
  displayedColumns: string[] = ['code', 'description', 'marque','matiere' ,'prixAchat', 'prixVente','fournisseur','actions']

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  selected;

  formValue = new FormGroup({
    base: new FormControl(''),
    code: new FormControl(''),
    coloration: new FormControl(''),
    description: new FormControl(''),
    marque: new FormControl(''),
    matiere: new FormControl(''),
    photochromique: new FormControl(''),
    addInf: new FormControl(''),
    addSup: new FormControl(''),
    axe: new FormControl(''),
    cylInf: new FormControl(''),
    cylSup: new FormControl(''),
    sphInf: new FormControl(''),
    sphSup: new FormControl(''),
    dia: new FormControl(''),
    indice: new FormControl(''),
    prixAchat: new FormControl(''),
    prixVente: new FormControl(''),
    fournisseur: new FormControl('')
  })

  constructor(public dialog: MatDialog,
    private verreService: VerreService,
    public dialogRef: MatDialogRef<ListVerresComponent>,) { }

  ngOnInit(): void {
    this.loadData();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  VerreChangedHandler(selectedVerre: Verre) {
    this.selected = selectedVerre;
  }

  onCloseVerre(row: any ): void {
    this.selectedVerre=row;
    this.newItemEvent.emit(row);
  }


  loadData(){
    this.verreService.getVerre().subscribe(
      (data : any) => {
        if(data){ 
        this.listVerre = data;
        this.dataSource = new MatTableDataSource(this.listVerre)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }}
    )
  }

}
