import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Monture } from '../model/monture';
import { AddEditMontureComponent } from './add-edit-monture/add-edit-monture.component';

@Component({
  selector: 'app-monture',
  templateUrl: './monture.component.html',
  styleUrls: ['./monture.component.scss']
})
export class MontureComponent implements OnInit {

  dataSource!: MatTableDataSource<Monture>;
  monture: Monture = new Monture();
  montureData !: any;
  listmonture: any;
  displayedColumns: string[] = ['ref','marque','prixAchat', 'prixVent', 'qte','actions']

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
    this.dialogRef = this.dialog.open(AddEditMontureComponent, {
      height: '60%',
      width: '50%',
      data: {
       
      },
    });
    this.dialogRef.afterClosed().subscribe(_result => {
      
    });
  }

}
