import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Lentille } from 'src/app/model/lentille';
import { FournisseurService } from 'src/app/service/frs-service';
import { LentilleService } from 'src/app/service/lentille.service';

@Component({
  selector: 'app-add-edit-lentille',
  templateUrl: './add-edit-lentille.component.html',
  styleUrls: ['./add-edit-lentille.component.scss']
})
export class AddEditLentilleComponent implements OnInit {
  isValidationInProgress = false;

  prixAchatVenteValidator: ValidatorFn = (control : AbstractControl) : ValidationErrors | null => {
    if (null != control.get('prixAchat') && null != control.get('prixVente')) {
      let prixAchat = parseInt(control.get('prixAchat').value);
      let prixVente = parseInt(control.get('prixVente').value);
      if (prixAchat >= prixVente) {
        return {'prixInvalid' : true};
      }
    }
    return null;
  }

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
    prixVente: new FormControl(''),
    fournisseur: new FormControl('')
  }, {validators : [this.prixAchatVenteValidator, Validators.required]})
  showAdd!: boolean;
  showUpdate!: boolean;
  allFournisseur :any;
  selected:[];
  i=0;

  lentille: Lentille = new Lentille();
  constructor(
    public dialogRef: MatDialogRef<AddEditLentilleComponent>,
    public lentilleService: LentilleService,
    public fournisseurService: FournisseurService,) { }

  

  ngOnInit(): void {
    this.getAllFournisseur();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  getAllFournisseur(){
    this.fournisseurService.getFournisseurByCategorieName('lentille').subscribe(res => {
     this.allFournisseur = res
     if(this.allFournisseur[this.i].name != this.lentille.fournisseur.name){
      this.i=this.i+1;
    }
    this.selected= this.allFournisseur[this.i];
    },
      err => { console.log(err) }
    )
  }
  clickAddLentille() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  checkRequiredValues() : boolean {
    if(!this.isValidationInProgress) {
      return false;
    }
    let isRequiredMissing = false;
    Object.keys(this.formValue.controls).forEach((key: string) => {
      isRequiredMissing = isRequiredMissing || this.formValue.controls[key].errors?.required;
    });
    return isRequiredMissing;
  }

  postLentilleDetails() {
    this.isValidationInProgress = true;
    this.formValue.markAllAsTouched();
    if (!this.formValue.valid) {
      return;
    }
    let lentille = {
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
    prixVente: this.formValue.value.prixVente,
    fournisseur: this.formValue.value.fournisseur,
    }

    this.lentilleService.postLentille(lentille)
      .subscribe(res => {
        alert("lentille ajouté avec succès")
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.lentilleService.getLentille();
      },
        err => { console.log(err) }
      )

  }

  onEdit(row: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.lentille = row;
    this.lentille.id = row.id;
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
    prixVente: row.prixVente,
    fournisseur: row.fournisseur
    })
  }

  //update lentille
  updateLentilleDetails() {
    let lentille = {
      id:this.lentille.id,
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
      prixVente: this.formValue.value.prixVente,
      fournisseur: this.formValue.value.fournisseur
      }
      this.lentilleService.UpdateLentille(lentille)
        .subscribe(res => {
          console.log(res);
          alert("Lentille modifier avec succès")
          let ref = document.getElementById('cancel')
          ref?.click();
          this.formValue.reset();
          this.lentilleService.getLentille();
        },
          err => { console.log(err) }
        )
  }

}
