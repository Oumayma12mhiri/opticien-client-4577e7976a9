import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LunetteSolaire } from '../model/lunetteSolaire';
import { AddEditLSComponent } from './add-edit-ls/add-edit-ls.component';

@Component({
  selector: 'app-lunette-solaire',
  templateUrl: './lunette-solaire.component.html',
  styleUrls: ['./lunette-solaire.component.scss']
})
export class LunetteSolaireComponent implements OnInit {

  dataSource!: MatTableDataSource<LunetteSolaire>;
  lunetteSolaire: LunetteSolaire = new LunetteSolaire();
  lunetteSolaireData !: any;
  listlunetteSolaire: any;
  displayedColumns: string[] = ['ref','marque','prixAchat', 'prixVent', 'qte' ,'actions']

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  dialogRef: any;
  formValue = new FormGroup({

  })

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialogRef = this.dialog.open(AddEditLSComponent, {
      height: '60%',
      width: '50%',
      data: {
       
      },
    });
    this.dialogRef.afterClosed().subscribe(_result => {
      
    });
  }
}
