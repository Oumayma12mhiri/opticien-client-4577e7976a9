import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Verre } from 'src/app/model/verre';
import { VerreService } from 'src/app/service/verre.service';

@Component({
  selector: 'app-add-edit-verre',
  templateUrl: './add-edit-verre.component.html',
  styleUrls: ['./add-edit-verre.component.scss']
})
export class AddEditVerreComponent implements OnInit {

  formValue = new FormGroup({
    base: new FormControl(''),
    code: new FormControl(''),
    coloration: new FormControl(''),
    description: new FormControl(''),
    marque: new FormControl(''),
    matiere: new FormControl(''),
    photochromique: new FormControl(''),
    addInf: new FormControl(''),
    addSup: new FormControl(''),
    axe: new FormControl(''),
    cylInf: new FormControl(''),
    cylSup: new FormControl(''),
    sphInf: new FormControl(''),
    sphSup: new FormControl(''),
    dia: new FormControl(''),
    indice: new FormControl(''),
    prixAchat: new FormControl(''),
    prixVente: new FormControl('')
  })
  showAdd!: boolean;
  showUpdate!: boolean;

  verre: Verre = new Verre();
  constructor(public dialogRef: MatDialogRef<AddEditVerreComponent>,
    public verreService: VerreService) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  clickAddVerre() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postVerreDetails() {
    let verre = {
    base:this.formValue.value.base,
    code: this.formValue.value.code ,
    coloration: this.formValue.value.coloration,
    description: this.formValue.value.description,
    marque: this.formValue.value.marque,
    matiere: this.formValue.value.matiere,
    photochromique: this.formValue.value.photochromique,
    addInf: this.formValue.value.addInf,
    addSup: this.formValue.value.addSup,
    axe: this.formValue.value.axe,
    cylInf: this.formValue.value.cylInf,
    cylSup: this.formValue.value.cylSup,
    sphInf: this.formValue.value.sphInf,
    sphSup: this.formValue.value.sphSup,
    dia: this.formValue.value.dia,
    indice: this.formValue.value.indice,
    prixAchat: this.formValue.value.prixAchat,
    prixVente: this.formValue.value.prixVente

    }

    this.verreService.postVerre(verre)
      .subscribe(res => {
        alert("Verre ajouté avec succès")
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.verreService.getVerre();
      },
        err => { console.log(err) }
      )

  }

  //update verre
  onEdit(row: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.verre.id = row.id;
    this.formValue.patchValue({
      base:row.base,
    code: row.code ,
    coloration: row.coloration,
    description: row.description,
    marque: row.marque,
    matiere: row.matiere,
    photochromique: row.photochromique,
    addInf: row.addInf,
    addSup: row.addSup,
    axe: row.axe,
    cylInf: row.cylInf,
    cylSup: row.cylSup,
    sphInf: row.sphInf,
    sphSup:row.sphSup,
    dia: row.dia,
    indice: row.indice,
    prixAchat: row.prixAchat,
    prixVente: row.prixVente

    })
  }

  //update verre
  updateVerreDetails() {
    let verre = {
      id:this.verre.id,
      base:this.formValue.value.base,
      code: this.formValue.value.code ,
      coloration: this.formValue.value.coloration,
      description: this.formValue.value.description,
      marque: this.formValue.value.marque,
      matiere: this.formValue.value.matiere,
      photochromique: this.formValue.value.photochromique,
      addInf: this.formValue.value.addInf,
      addSup: this.formValue.value.addSup,
      axe: this.formValue.value.axe,
      cylInf: this.formValue.value.cylInf,
      cylSup: this.formValue.value.cylSup,
      sphInf: this.formValue.value.sphInf,
      sphSup: this.formValue.value.sphSup,
      dia: this.formValue.value.dia,
      indice: this.formValue.value.indice,
      prixAchat: this.formValue.value.prixAchat,
      prixVente: this.formValue.value.prixVente
  
      }

      console.log(verre);
      this.verreService.UpdateVerre(verre)
        .subscribe(res => {
          console.log(res);
          alert("Verre modifier avec succès")
          let ref = document.getElementById('cancel')
          ref?.click();
          this.formValue.reset();
          this.verreService.getVerre();
        },
          err => { console.log(err) }
        )
  }

}
