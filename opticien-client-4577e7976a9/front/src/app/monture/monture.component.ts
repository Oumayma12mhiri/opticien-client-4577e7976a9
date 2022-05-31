import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Monture } from '../model/monture';
import { MontureService } from '../service/monture.service';
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
  displayedColumns: string[] = ['reference','marque','prixAchat', 'prixVente', 'quantite' ,'fournisseur','actions']

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  dialogRef: any;
  formValue = new FormGroup({
    reference: new FormControl(''),
    marque: new FormControl(''),
    prixAchat: new FormControl(''),
    prixVente: new FormControl(''),
    quantite: new FormControl(''),
    fournisseur: new FormControl('')
  })

  constructor(public dialog: MatDialog,
    public montureService: MontureService,
    ) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    this.montureService.getMonture().subscribe(
      (data : any) => {
        console.log("data",data)
        if(data){ 
        this.listmonture = data;
        this.dataSource = new MatTableDataSource(this.listmonture)
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }}
    )
  }
  openDialog(): void {
    this.dialogRef = this.dialog.open(AddEditMontureComponent, {
      height: '60%',
      width: '50%',
      data: {
        reference:this.monture.reference,
        marque:this.monture.marque,
        prixAchat:this.monture.prixAchat,
        prixVente:this.monture.prixVente,
        quantite:this.monture.quantite,
        fournisseur:this.monture.fournisseur
      },
    });
    this.dialogRef.afterClosed().subscribe(_result => {
      this.loadData();
    });
  }
  onEdite(row: any) {
    this.dialogRef.componentInstance.onEdit(row);
  }                                                            
  addMonture(){
    this.dialogRef.componentInstance.clickAddMonture();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  } 
  
  deleteMonture(id: any) {
    if (confirm("Etes-vous sur de supprimer cette monture?")) {
      this.montureService.DeleteMonture(id)
       .subscribe(_res => {
          alert("Monture supprimée avec succés ");
          this.loadData();
        }
       )
    }
  }
}
