import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Monture } from 'src/app/model/monture';
import { FournisseurService } from 'src/app/service/frs-service';
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
    name: new FormControl(''),
    reference: new FormControl(''),
    marque: new FormControl(''),
    prixAchat: new FormControl(''),
    prixVente: new FormControl(''),
    quantite: new FormControl(''),
    fournisseur: new FormControl(''),
  }, {validators : [this.prixAchatVenteValidator, Validators.required]})
  constructor(public dialogRef: MatDialogRef<AddEditMontureComponent>,
    public montureService: MontureService,
    public fournisseurService: FournisseurService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllFournisseur();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  getAllFournisseur(){
    this.fournisseurService.getFournisseurByCategorieName('monture').subscribe(res => {
     this.allFournisseur = res
     if(this.allFournisseur[this.i].name != this.monture.fournisseur.name){
      this.i=this.i+1;
    }
    this.selected= this.allFournisseur[this.i];
    },
      err => { console.log(err) }
    )
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

  //Save lunette Solaire
  postMontureDetails() {
    this.isValidationInProgress = true;
    this.formValue.markAllAsTouched();
    if (!this.formValue.valid) {
      return;
    }
    console.log(this.formValue.value.marque);
    let monture = {
      reference: this.formValue.value.reference,
      marque: this.formValue.value.marque,
      prixAchat: this.formValue.value.prixAchat,
      prixVente: this.formValue.value.prixVente,
      quantite: this.formValue.value.quantite,
      fournisseur: this.formValue.value.fournisseur
    }
    console.log(monture);
    this.montureService.postMonture(monture)
      .subscribe(res => {
        console.log(res);
        alert("Monture ajoutée avec succès")
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
      quantite: this.formValue.value.quantite,
      fournisseur: this.formValue.value.fournisseur
    }
    console.log(monture);
    this.montureService.UpdateMonture(monture)
      .subscribe(res => {
        console.log(res);
        alert("Monture modifiée avec succès")
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
    this.monture = row;
    this.monture.id = row.id;
    this.formValue.patchValue({
      id: row.id,
      reference: row.reference,
      marque: row.marque,
      prixAchat: row.prixAchat,
      prixVente: row.prixVente,
      quantite: row.quantite,
      fournisseur: row.fournisseur
    })
  }

}
