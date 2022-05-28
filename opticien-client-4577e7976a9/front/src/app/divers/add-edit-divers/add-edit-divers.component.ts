import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Divers } from 'src/app/model/divers';
import { DiversService } from 'src/app/service/divers.service';

@Component({
  selector: 'app-add-edit-divers',
  templateUrl: './add-edit-divers.component.html',
  styleUrls: ['./add-edit-divers.component.scss']
})
export class AddEditDiversComponent implements OnInit {
  divers: Divers = new Divers();
  showAdd!: boolean;
  showUpdate!: boolean;
  formValue = new FormGroup({
    name: new FormControl(''),
    reference: new FormControl(''),
    prixAchat: new FormControl(''),
    prixVente: new FormControl(''),
    quantite: new FormControl('')

  })
  constructor(public dialogRef: MatDialogRef<AddEditDiversComponent>, public diversService: DiversService) { }

  ngOnInit(): void {
  }


  onNoClick(): void {
    this.dialogRef.close();
  }
  clickAddDivers() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  //Save lunette Solaire
  postDiversDetails() {
    let divers = {
      name: this.formValue.value.name,
      reference: this.formValue.value.reference,
      prixAchat: this.formValue.value.prixAchat,
      prixVente: this.formValue.value.prixVente,
      quantite: this.formValue.value.quantite,

    }

    this.diversService.postDivers(divers)
      .subscribe(res => {
        console.log(res);
        alert("Divers ajouté avec succès")
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.diversService.getDivers();
      },
        err => { console.log(err) }
      )
  }
  updateDiversDetails() {
    let divers = {
      id: this.divers.id,
      name: this.formValue.value.name,
      reference: this.formValue.value.reference,
      prixAchat: this.formValue.value.prixAchat,
      prixVente: this.formValue.value.prixVente,
      quantite: this.formValue.value.quantite,
    }
    console.log(divers);
    this.diversService.UpdateDivers(divers)
      .subscribe(res => {
        console.log(res);
        alert("divers modifier avec succès")
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.diversService.getDivers();
      },
        err => { console.log(err) }
      )
  }
  onEdit(row: any) {
    this.showAdd = false;
    this.showUpdate = true;
    console.log(row);
    this.divers.id = row.id;
    this.formValue.patchValue({
      id: row.id,
      reference: row.reference,
      name: row.name,
      prixAchat: row.prixAchat,
      prixVente: row.prixVente,
      quantite: row.quantite
    })
  }

}
