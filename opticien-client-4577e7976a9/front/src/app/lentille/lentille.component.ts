import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Lentille } from '../model/lentille';
import { LentilleService } from '../service/lentille.service';
import { AddEditLentilleComponent } from './add-edit-lentille/add-edit-lentille.component';

@Component({
  selector: 'app-lentille',
  templateUrl: './lentille.component.html',
  styleUrls: ['./lentille.component.scss']
})
export class LentilleComponent implements OnInit {

  dataSource!: MatTableDataSource<Lentille>;
  lentille: Lentille = new Lentille();
  LentilleData !: any;
  listLentille: any;
  displayedColumns: string[] = ['code', 'description', 'marque','matiere' ,'prixAchat', 'prixVente','fournisseur','actions']

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  dialogRef: any;
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
    private lentilleService: LentilleService) { }

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

  openDialog(): void {
    this.dialogRef = this.dialog.open(AddEditLentilleComponent, {
      height: '70%',
      width: '60%',
      data: {
        base: this.lentille.base,
        code: this.lentille.code,
        coloration: this.lentille.coloration,
        description: this.lentille.description,
        marque: this.lentille.marque,
        matiere: this.lentille.matiere,
        photochromique: this.lentille.photochromique,
        addInf: this.lentille.addInf,
        addSup: this.lentille.addSup,
        axe: this.lentille.axe,
        cylInf: this.lentille.cylInf,  
        cylSup: this.lentille.cylSup,
        sphInf: this.lentille.sphInf,
        sphSup:this.lentille.sphSup,
        dia: this.lentille.dia,
        indice: this.lentille.indice,
        prixAchat: this.lentille.prixAchat,
        prixVente: this.lentille.prixVente,
        fournisseur:this.lentille.fournisseur
      },
    });
    this.dialogRef.afterClosed().subscribe(_result => {
      this.loadData()
    });
  }

  //fill in fields from client information
  onEdite(row: any) {
    this.dialogRef.componentInstance.onEdit(row);
  }
  addLentille(){
    this.dialogRef.componentInstance.clickAddLentille();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  //remove verre
 deleteLentille(id: any) {
  if (confirm("êtes-vous sur de supprimer ce lentille ?")) {
    this.lentilleService.DeleteLentille(id)
     .subscribe(_res => {
        alert("Lentillr supprimé ");
        this.loadData();
      }
     )
  }
}

}
