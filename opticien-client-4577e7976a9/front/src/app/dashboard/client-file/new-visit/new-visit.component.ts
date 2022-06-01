import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Client } from 'src/app/model/client';
import { Visite } from 'src/app/model/visite';
import { VisiteService } from 'src/app/service/visiteService';


@Component({
  selector: 'app-new-visit',
  templateUrl: './new-visit.component.html',
  styleUrls: ['./new-visit.component.scss']
})
export class NewVisitComponent implements OnInit {

  visite: Visite = new Visite();
  client: Client = new Client();
  newVisite: Visite = new Visite();

  dateVisNow !: Date;
  @Input() date = "";
  heureVisNow !: Date;
  hours = "";
  //dateVisNow =0;
  idClient = 0;
  solde = 0;
  newSolde = 0;

  formValue = new FormGroup({
    refVisite: new FormControl(''),
    date: new FormControl(''),
    heure: new FormControl(''),
    montantrecu: new FormControl(''),
    clientDto: new FormControl('')
  })

  constructor(public dialog: MatDialog,
    private serviceVisite: VisiteService,
    public dialogRef: MatDialogRef<NewVisitComponent>) { }
  ngOnInit(): void {


    this.dateVisNow = new Date();
    this.date = this.dateVisNow.getFullYear() + '-' + ((this.dateVisNow.getMonth() + 1).toString().length == 1 ? "0" + (this.dateVisNow.getMonth() + 1) : (this.dateVisNow.getMonth() + 1)) + '-' + (this.dateVisNow.getDate().toString().length == 1 ? "0" + this.dateVisNow.getDate() : this.dateVisNow.getDate());
    console.log(this.date);

    this.heureVisNow = new Date();
    this.hours = ((this.heureVisNow.getHours().toString().length == 1) ? "0" + this.heureVisNow.getHours() : this.heureVisNow.getHours()) + ":" + (this.heureVisNow.getMinutes().toString().length == 1 ? ("0" + this.heureVisNow.getMinutes()) : this.heureVisNow.getMinutes()) + ":" + ((this.heureVisNow.getSeconds().toString().length == 1) ? "0" + this.heureVisNow.getSeconds() : this.heureVisNow.getSeconds());
    console.log(this.hours);

    this.idClient = parseInt(localStorage.getItem('idClient'));
    console.log(this.idClient);
    this.solde = parseFloat(localStorage.getItem('solde'));
    console.log(this.solde)
    this.newSolde = this.solde;

  }

  //open modal de button nouvelle visite
  openDialogNewVisit(res): void {
    this.client = res

    this.dialogRef = this.dialog.open(NewVisitComponent, {
      height: '75%',
      width: '30%',
      data: {
        id: this.idClient,
        refVisite: this.visite.refVisite,
        date: this.visite.date,
        heure: this.visite.heure,
        montantrecu: this.visite.montantrecu,
      },
    });
    this.dialogRef.afterClosed().subscribe(_result => {
      this.serviceVisite.getVisiteOfClient(this.idClient);
    });
  }

  //button fermer (close modal)
  onNoClick(): void {
    this.dialogRef.close();
  }

  calculerSolde() {
    this.newSolde = this.solde - this.formValue.value.montantrecu
  }

  //quand je click sur un client (afficher tt les visites de ce client)
  postVisitDetails() {
    console.log(this.client.id)
    let visit = {
      date: this.date + "T" + this.hours,
      montantrecu: this.newSolde,
      clientDto: this.client,

    }
    console.log(visit);

    this.serviceVisite.postVisite(visit)
      .subscribe(res => {
        console.log(res);
        alert("Nouvelle visite ajoutée avec succès")
        let ref = document.getElementById('cancel2')
        ref?.click();
        this.formValue.reset();
        this.serviceVisite.getVisiteOfClient(this.idClient);
      },
        err => { alert("Quelque chose s'est mal passé") }
      )

  }


}
