import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Divers } from '../model/divers';
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
  displayedColumns: string[] = ['ref','nomDivers','prixAchat', 'prixVent', 'qte','actions']

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
    this.dialogRef = this.dialog.open(AddEditDiversComponent, {
      height: '60%',
      width: '50%',
      data: {
       
      },
    });
    this.dialogRef.afterClosed().subscribe(_result => {
      
    });
  }

}
