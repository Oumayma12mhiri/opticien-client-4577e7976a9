import { Component, Input, OnInit, Output,EventEmitter, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Lentille } from 'src/app/model/lentille';
import { LentilleService } from 'src/app/service/lentille.service';
import { ListDiversComponent } from '../list-divers/list-divers.component';

@Component({
  selector: 'app-list-lentilles',
  templateUrl: './list-lentilles.component.html',
  styleUrls: ['./list-lentilles.component.scss']
})
export class ListLentillesComponent implements OnInit {
  @Input() selectedLentille:any;
  @Output() newItemEvent = new EventEmitter<any>();

  dataSource!: MatTableDataSource<Lentille>;
  lentille: Lentille = new Lentille();
  LentilleData !: any;
  listLentille: any;
  selected;
  displayedColumns: string[] = ['code', 'description', 'marque','matiere' ,'prixAchat', 'prixVente','fournisseur','actions']

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;


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

  constructor(
    public dialog: MatDialog,
    private lentilleService: LentilleService,
    public dialogRef: MatDialogRef<ListDiversComponent>
  ) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
    this.lentilleService.getLentille().subscribe(
      (data : any) => {
        if(data){ 
        this.listLentille = data;
        this.dataSource = new MatTableDataSource(this.listLentille)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }}
    )
  }
  lentilleChangedHandler(selectedLentille: Lentille) {
    this.selected = selectedLentille;
  }

  onCloseLentille(row: any ): void {
    console.log("selected row 1",row)
    this.selectedLentille=row;
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
