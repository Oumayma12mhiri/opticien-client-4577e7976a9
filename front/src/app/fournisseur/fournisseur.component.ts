import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Fournisseur } from '../model/fournisseur';
import { FournisseurService } from '../service/frs-service';
import { AddEditFRSComponent } from './add-edit-frs/add-edit-frs.component';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.scss']
})
export class FournisseurComponent implements OnInit {

  dataSource!: MatTableDataSource<Fournisseur>;
  fournisseur: Fournisseur = new Fournisseur();
  fournisseurData !: any;
  listFournisseur: any;
  displayedColumns: string[] = ['nomFRS', 'matriculeFiscale', 'adresse', 'email', 'numTel', 'actions']

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  dialogRef: any;
  formValue = new FormGroup({

  })
  constructor(
    public dialog: MatDialog,
    public frsService: FournisseurService
  ) { }

  ngOnInit(): void {
    this.frsService.getFournisseur().subscribe(
      data => {

        this.listFournisseur = data;
        this.dataSource = new MatTableDataSource(this.listFournisseur)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    )
  }

  //Add fournisseur
  addFournisseur() {
    this.dialogRef.componentInstance.clickAddFournisseur();
  }
  //update fournisseur
  onEdite(row: any) {
    console.log("**************************************************")
    console.log(row);
    this.dialogRef.componentInstance.onEdit(row);
  }

  //open modal
  openDialog(): void {
    this.dialogRef = this.dialog.open(AddEditFRSComponent, {
      height: '60%',
      width: '50%',
      data: {

      },
    });
    this.dialogRef.afterClosed().subscribe(_result => {

    });
  }

  //remove Fournisseur
  deleteFournisseur(id: any) {
    if (confirm("êtes-vous sur de supprimer ce fournisseur ?")) {
      this.frsService.DeleteFournisseur(id)
        .subscribe(_res => {
          alert("Fournisseur supprimé ");
          this.frsService.getFournisseur();
        }

        )



    }
  }


}
