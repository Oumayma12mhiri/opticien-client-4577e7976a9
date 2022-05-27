import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LunetteSolaire } from '../model/lunetteSolaire';
import { LunetteSolaireService } from '../service/lunette-solaire.service';
import { AddEditLSComponent } from './add-edit-ls/add-edit-ls.component';

@Component({
  selector: 'app-lunette-solaire',
  templateUrl: './lunette-solaire.component.html',
  styleUrls: ['./lunette-solaire.component.scss']
})
export class LunetteSolaireComponent implements OnInit {

  formValue = new FormGroup({
    ref: new FormControl(''),
    marque: new FormControl(''),
    prixAchat: new FormControl(''),
    prixVente: new FormControl(''),
    quantite: new FormControl('')
  })
  dataSource: MatTableDataSource<LunetteSolaire>;
  lunetteSolaire: LunetteSolaire = new LunetteSolaire();
  lunetteSolaireData !: any;
  listlunetteSolaire: any;
  displayedColumns: string[] = ['ref','marque','prixAchat', 'prixVente', 'quantite' ,'actions']

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  dialogRef: any;


  constructor(public dialog: MatDialog,
    public lunetteSolaireService: LunetteSolaireService) { }

  ngOnInit(): void {
   this.loadData()
  }


  loadData() {
    this.lunetteSolaireService.getLunetteSolaire().subscribe(
      (data : any) => {
        console.log(data)
        if(data){ 
        this.listlunetteSolaire = data;
        this.dataSource = new MatTableDataSource(this.listlunetteSolaire)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }}
    )
  }

  openDialog(): void {
    this.dialogRef = this.dialog.open(AddEditLSComponent, {
      height: '60%',
      width: '50%',
      data: {
        ref:this.lunetteSolaire.ref,
        marque:this.lunetteSolaire.marque,
        prixAchat:this.lunetteSolaire.prixAchat,
        prixVente:this.lunetteSolaire.prixVente,
        quantite:this.lunetteSolaire.quantite
      },
    });
    this.dialogRef.afterClosed().subscribe(_result => {
      this.loadData();
    });
  }
  
  //fill in fields from client information
  onEdite(row: any) {
    this.dialogRef.componentInstance.onEdit(row);
  }
  addLunetteSolaire(){
    this.dialogRef.componentInstance.clickAddLunetteSolaire();
  }
  deleteLunetteSolaire(id: any) {
    if (confirm("êtes-vous sur de supprimer ce lunette solire?")) {
      this.lunetteSolaireService.DeleteLunetteSolaire(id)
       .subscribe(_res => {
          alert("Lunette solaire supprimé ");
          this.loadData();
        }
       )
    }
  }

}
