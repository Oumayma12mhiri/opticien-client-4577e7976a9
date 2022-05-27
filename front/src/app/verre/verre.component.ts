import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Verre } from '../model/verre';
import { AddEditVerreComponent } from './add-edit-verre/add-edit-verre.component';

@Component({
  selector: 'app-verre',
  templateUrl: './verre.component.html',
  styleUrls: ['./verre.component.scss']
})
export class VerreComponent implements OnInit {

  dataSource!: MatTableDataSource<Verre>;
  monture: Verre = new Verre();
  VerreData !: any;
  listVerre: any;
  displayedColumns: string[] = ['code', 'description', 'marque','matiere' ,'prixAchat', 'prixVente','actions']

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
    this.dialogRef = this.dialog.open(AddEditVerreComponent, {
      height: '80%',
      width: '80%',
      data: {
       
      },
    });
    this.dialogRef.afterClosed().subscribe(_result => {
      
    });
  }

}
