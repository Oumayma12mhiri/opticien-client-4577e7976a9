import { Component, Input, OnInit, Output, ViewChild,EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LunetteSolaire } from 'src/app/model/lunetteSolaire';
import { LunetteSolaireService } from 'src/app/service/lunette-solaire.service';

@Component({
  selector: 'app-list-lunette-solaire',
  templateUrl: './list-lunette-solaire.component.html',
  styleUrls: ['./list-lunette-solaire.component.scss']
})
export class ListLunetteSolaireComponent implements OnInit {
  @Input() selectedLunette:any;
  @Output() newItemEvent = new EventEmitter<any>();

  formValue = new FormGroup({
    ref: new FormControl(''),
    marque: new FormControl(''),
    prixAchat: new FormControl(''),
    prixVente: new FormControl(''),
    quantite: new FormControl(''),
    fournisseur: new FormControl('')
  })
  dataSource: MatTableDataSource<LunetteSolaire>;
  lunetteSolaire: LunetteSolaire = new LunetteSolaire();
  lunetteSolaireData !: any;
  listlunetteSolaire: any;
  displayedColumns: string[] = ['ref','marque','prixAchat', 'prixVente', 'quantite' ,'fournisseur','actions']

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;
  selected;
  

  constructor(
    public dialog: MatDialog,
    public lunetteSolaireService: LunetteSolaireService,
    public dialogRef: MatDialogRef<ListLunetteSolaireComponent>,
  ) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    this.lunetteSolaireService.getLunetteSolaire().subscribe(
      (data : any) => {
        console.log("data ",data)
        if(data){ 
        this.listlunetteSolaire = data;
        this.dataSource = new MatTableDataSource(this.listlunetteSolaire)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }}
    )
  }

  LunetteChangedHandler(selectedLunette: LunetteSolaire) {
    this.selected = selectedLunette;
  }

  onCloseLunette(row: any ): void {
    this.selectedLunette=row;
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
