import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Verre } from '../model/verre';
import { VerreService } from '../service/verre.service';
import { AddEditVerreComponent } from './add-edit-verre/add-edit-verre.component';

@Component({
  selector: 'app-verre',
  templateUrl: './verre.component.html',
  styleUrls: ['./verre.component.scss']
})
export class VerreComponent implements OnInit {

  dataSource!: MatTableDataSource<Verre>;
  verre: Verre = new Verre();
  VerreData !: any;
  listVerre: any;
  displayedColumns: string[] = ['code', 'description', 'marque','matiere' ,'prixAchat', 'prixVente','actions']

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
    dia: new FormControl(''),
    indice: new FormControl(''),
    prixAchat: new FormControl(''),
    prixVente: new FormControl('')
  })

  constructor(public dialog: MatDialog,
    private verreService: VerreService) { }

  ngOnInit(): void {
    this.loadData();
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

  openDialog(): void {
    this.dialogRef = this.dialog.open(AddEditVerreComponent, {
      height: '80%',
      width: '80%',
      data: {
        base: this.verre.base,
        code: this.verre.code,
        coloration: this.verre.coloration,
        description: this.verre.description,
        marque: this.verre.marque,
        matiere: this.verre.matiere,
        photochromique: this.verre.photochromique,
        addInf: this.verre.addInf,
        addSup: this.verre.addSup,
        axe: this.verre.axe,
        cylInf: this.verre.cylInf,  
        cylSup: this.verre.cylSup,
        sphInf: this.verre.sphInf,
        dia: this.verre.dia,
        indice: this.verre.indice,
        prixAchat: this.verre.prixAchat,
        prixVente: this.verre.prixVente
      },
    });
    this.dialogRef.afterClosed().subscribe(_result => {
      this.loadData()
    });
  }

  //remove verre
 deleteVerre(id: any) {
  if (confirm("êtes-vous sur de supprimer ce verre ?")) {
    this.verreService.DeleteVerre(id)
     .subscribe(_res => {
        alert("Verre supprimé ");
        this.loadData();
      }
     )
  }
}

}
