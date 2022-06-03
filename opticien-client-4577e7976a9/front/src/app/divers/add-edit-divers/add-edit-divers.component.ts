import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Divers } from 'src/app/model/divers';
import { Fournisseur } from 'src/app/model/fournisseur';
import { DiversService } from 'src/app/service/divers.service';
import { FournisseurService } from 'src/app/service/frs-service';

@Component({
  selector: 'app-add-edit-divers',
  templateUrl: './add-edit-divers.component.html',
  styleUrls: ['./add-edit-divers.component.scss']
})
export class AddEditDiversComponent implements OnInit {
  divers: Divers = new Divers();
  showAdd!: boolean;
  showUpdate!: boolean;

  allFournisseur :any;
  selected:[];
  i=0;
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
    name: new FormControl('',Validators.required),
    reference: new FormControl('',Validators.required),
    prixAchat: new FormControl('',Validators.required),
    prixVente: new FormControl('',Validators.required),
    quantite: new FormControl('',Validators.required),
    fournisseur: new FormControl('',Validators.required),

  }, {validators : [this.prixAchatVenteValidator, Validators.required]})
  constructor(
    public dialogRef: MatDialogRef<AddEditDiversComponent>, 
    public diversService: DiversService,
    public fournisseurService: FournisseurService,) { }

  ngOnInit(): void {
    this.getAllFournisseur();
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  getAllFournisseur(){
    this.fournisseurService.getFournisseurByCategorieName('divers').subscribe(res => {
     this.allFournisseur = res
     if(this.allFournisseur[this.i].name != this.divers.fournisseur.name){
      this.i=this.i+1;
    }
    this.selected= this.allFournisseur[this.i];
    },
      err => { console.log(err) }
    )
  }

  clickAddDivers() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  get f() {
    return this.formValue.controls;
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

  postDiversDetails() {
    this.isValidationInProgress = true;
    this.formValue.markAllAsTouched();
    if (!this.formValue.valid) {
      return;
    }
    let divers = {
      name: this.formValue.value.name,
      reference: this.formValue.value.reference,
      prixAchat: this.formValue.value.prixAchat,
      prixVente: this.formValue.value.prixVente,
      quantite: this.formValue.value.quantite,
      fournisseur: this.formValue.value.fournisseur
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
    console.log(this.formValue.value.fournisseur)
    let divers = {
      id: this.divers.id,
      name: this.formValue.value.name,
      reference: this.formValue.value.reference,
      prixAchat: this.formValue.value.prixAchat,
      prixVente: this.formValue.value.prixVente,
      quantite: this.formValue.value.quantite,
      fournisseur: this.formValue.value.fournisseur
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
    this.divers=row;
    this.divers.id = row.id;
    this.formValue.patchValue({
      id: row.id,
      reference: row.reference,
      name: row.name,
      prixAchat: row.prixAchat,
      prixVente: row.prixVente,
      quantite: row.quantite,
      fournisseur: row.fournisseur
    })
  }

}
