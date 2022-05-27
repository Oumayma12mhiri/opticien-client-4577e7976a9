import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Monture } from 'src/app/model/monture';
import { MontureService } from 'src/app/service/monture.service';

@Component({
  selector: 'app-add-edit-monture',
  templateUrl: './add-edit-monture.component.html',
  styleUrls: ['./add-edit-monture.component.scss']
})
export class AddEditMontureComponent implements OnInit {


  monture: Monture = new Monture();
  showAdd!: boolean;
  showUpdate!: boolean;

  formValue = new FormGroup({
    name: new FormControl(''),
    reference: new FormControl(''),
    prixAchat: new FormControl(''),
    prixVente: new FormControl(''),
    quantite: new FormControl('')
  })
  constructor(public dialogRef: MatDialogRef<AddEditMontureComponent>,
    public montureService: MontureService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  //Save lunette Solaire
  postMontureDetails() {
    let monture = {
      reference: this.formValue.value.reference,
      marque: this.formValue.value.marque,
      prixAchat: this.formValue.value.prixAchat,
      prixVente: this.formValue.value.prixVente,
      quantite: this.formValue.value.quantite
    }
    console.log(monture);
    this.montureService.postMonture(monture)
      .subscribe(res => {
        console.log(res);
        alert("Monture ajouté avec succès")
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.montureService.getMonture();
      },
        err => { console.log(err) }
      )
  }

  //Update lunette Solaire
  updateMontureDetails() {
    let monture = {
      id: this.monture.id,
      reference: this.formValue.value.reference,
      marque: this.formValue.value.marque,
      prixAchat: this.formValue.value.prixAchat,
      prixVente: this.formValue.value.prixVente,
      quantite: this.formValue.value.quantite
    }
    console.log(monture);
    this.montureService.UpdateMonture(monture)
      .subscribe(res => {
        console.log(res);
        alert("Monture modifier avec succès")
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.montureService.getMonture();
      },
        err => { console.log(err) }
      )
  }
  clickAddMonture() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
  //fill in fields from lunette solaire information
  onEdit(row: any) {
    this.showAdd = false;
    this.showUpdate = true;
    console.log(row);
    this.monture.id = row.id;
    this.formValue.patchValue({
      id: row.id,
      reference: row.reference,
      marque: row.marque,
      prixAchat: row.prixAchat,
      prixVente: row.prixVente,
      quantite: row.quantite
    })
  }

}
