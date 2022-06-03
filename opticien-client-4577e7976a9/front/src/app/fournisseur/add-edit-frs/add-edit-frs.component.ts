import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Fournisseur } from 'src/app/model/fournisseur';
import { CategorieService } from 'src/app/service/categorie.service';
import { FournisseurService } from 'src/app/service/frs-service';

@Component({
  selector: 'app-add-edit-frs',
  templateUrl: './add-edit-frs.component.html',
  styleUrls: ['./add-edit-frs.component.scss']
})
export class AddEditFRSComponent implements OnInit {
  isValidationInProgress = false;

  formValue = new FormGroup({
    name: new FormControl(''),
    matriculeFiscale: new FormControl(''),
    email: new FormControl('', Validators.email),
    adresse: new FormControl(''),
    numTel: new FormControl(''),
    categorie: new FormControl(''),
  })
  showAdd!: boolean;
  showUpdate!: boolean;
  allCategorie :any;

  selected:[];
  i=0;

  fournisseur: Fournisseur = new Fournisseur();

  constructor(
    public dialogRef: MatDialogRef<AddEditFRSComponent>,
    public frsService: FournisseurService,
    public CategorieService: CategorieService,
  ) { }

  ngOnInit(): void {
    this.getAllCategorie();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  clickAddFournisseur() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  getAllCategorie(){
    this.CategorieService.getCategorie().subscribe(res => {
      this.allCategorie = res
     if(this.allCategorie[this.i].name != this.fournisseur.categorie.name){
       this.i=this.i+1;
     }
    this.selected= this.allCategorie[this.i];
     },
      err => { console.log(err) }
     )}
   

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

  checkMailFormat() : boolean {
    if(!this.isValidationInProgress) {
      return false;
    }
    return this.formValue.controls['email'].errors?.email;
  }

  //save Fournisseur
  postFournisseurDetails() {
    this.isValidationInProgress = true;
    this.formValue.markAllAsTouched();
    if (!this.formValue.valid) {
      return;
    }
console.log(this.formValue.value.categorie)
    let fournisseur = {
      name: this.formValue.value.name,
      matriculeFiscale: this.formValue.value.matriculeFiscale,
      email: this.formValue.value.email,
      adresse: this.formValue.value.adresse,
      numTel: this.formValue.value.numTel,
      categorie: this.formValue.value.categorie,

    }

    this.frsService.postFournisseur(fournisseur)
      .subscribe(res => {
        alert("Fournisseur ajouté avec succès")
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.frsService.getFournisseur();
      },
        err => { 
          alert(err.error.message);
        }
      )

  }
  //update fournisseur
  onEdit(row: any) {
    this.showAdd = false;
    this.showUpdate = true;
    console.log("*********************************add-edit****************************************************")
    this.fournisseur.id = row.id;
    this.formValue.patchValue({
      name: row.name,
      matriculeFiscale: row.matriculeFiscale,
      email: row.email,
      adresse: row.adresse,
      numTel: row.numTel,
      categorie: row.categorie,

    })
  }
  //update Fournisseur
  UpdateFournisseurDetails() {
    console.log("here");
    this.fournisseur.name = this.formValue.value.name;
    this.fournisseur.matriculeFiscale = this.formValue.value.matriculeFiscale;
    this.fournisseur.email = this.formValue.value.email;
    this.fournisseur.adresse = this.formValue.value.adresse;
    this.fournisseur.numTel = this.formValue.value.numTel;
   



    this.frsService.UpdateFournisseur(this.fournisseur, this.fournisseur.id)
      .subscribe(res => {
        alert("Update Successfully");
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.frsService.getFournisseur();
      })
  }



}
