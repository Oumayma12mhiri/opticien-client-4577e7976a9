import { Component, Input, OnInit, Output, ViewChild,EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Divers } from 'src/app/model/divers';
import { DiversService } from 'src/app/service/divers.service';

@Component({
  selector: 'app-list-divers',
  templateUrl: './list-divers.component.html',
  styleUrls: ['./list-divers.component.scss']
})
export class ListDiversComponent implements OnInit {
  @Input() selectedDivers:any;
  @Output() newItemEvent = new EventEmitter<any>();

  dataSource!: MatTableDataSource<Divers>;
  divers: Divers = new Divers();
  diversData !: any;
  listDivers: any;
  displayedColumns: string[] = ['ref', 'nomDivers', 'prixAchat', 'prixVent', 'qte' ,'fournisseur', 'actions']

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  selected;

  formValue = new FormGroup({
    name: new FormControl(''),
    reference: new FormControl(''),
    prixAchat: new FormControl(''),
    prixVente: new FormControl(''),
    quantite: new FormControl(''),
    fournisseur: new FormControl('')
  })

  constructor(
    public dialog: MatDialog,
     public diversService: DiversService,
     public dialogRef: MatDialogRef<ListDiversComponent>,
  ) { }

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

  DiversChangedHandler(selectedDivers: Divers) {
    this.selected = selectedDivers;
  }

  onCloseDivers(row: any ): void {
    this.selectedDivers=row;
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
