import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Divers } from '../model/divers';
import { DiversService } from '../service/divers.service';
import { AddEditDiversComponent } from './add-edit-divers/add-edit-divers.component';

@Component({
  selector: 'app-divers',
  templateUrl: './divers.component.html',
  styleUrls: ['./divers.component.scss']
})
export class DiversComponent implements OnInit {

  dataSource!: MatTableDataSource<Divers>;
  divers: Divers = new Divers();
  diversData !: any;
  listDivers: any;
  displayedColumns: string[] = ['ref', 'nomDivers', 'prixAchat', 'prixVent', 'qte' ,'fournisseur', 'actions']

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  dialogRef: any;
  formValue = new FormGroup({
    name: new FormControl(''),
    reference: new FormControl(''),
    prixAchat: new FormControl(''),
    prixVente: new FormControl(''),
    quantite: new FormControl(''),
    fournisseur: new FormControl('')
  })

  constructor(public dialog: MatDialog, public diversService: DiversService) { }

  ngOnInit(): void {
    this.loadData()

  }
  loadData() {
    this.diversService.getDivers().subscribe(
      (data: any) => {
        console.log("data", data)
        if (data) {
          this.listDivers = data;
          this.dataSource = new MatTableDataSource(this.listDivers)
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }
    )
  }

  onEdite(row: any) {
    this.dialogRef.componentInstance.onEdit(row);
  }
  addDivers() {
    this.dialogRef.componentInstance.clickAddDivers();
  }
  openDialog(): void {
    this.dialogRef = this.dialog.open(AddEditDiversComponent, {
      height: '50%',
      width: '50%',
      data: {
        name: this.divers.name,
        reference: this.divers.reference,
        prixAchat: this.divers.prixAchat,
        prixVente: this.divers.prixVente,
        quantite: this.divers.quantite,
        fournisseur: this.divers.fournisseur,
      },
    });
    this.dialogRef.afterClosed().subscribe(_result => {
      this.loadData();
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  deleteDivers(id: any) {
    if (confirm("Etes-vous sur de supprimer ce divers?")) {
      this.diversService.DeleteDivers(id)
        .subscribe(_res => {
          alert("Divers supprimé avec succes");
          this.loadData();
        }
        )
    }
  }

}
