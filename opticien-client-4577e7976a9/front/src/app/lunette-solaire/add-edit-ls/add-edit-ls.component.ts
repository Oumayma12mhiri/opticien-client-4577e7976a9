import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { MatDialogRef,MatDialog } from '@angular/material/dialog';
import { LunetteSolaire } from 'src/app/model/lunetteSolaire';
import { FournisseurService } from 'src/app/service/frs-service';
import { LunetteSolaireService } from 'src/app/service/lunette-solaire.service';

@Component({
  selector: 'app-add-edit-ls',
  templateUrl: './add-edit-ls.component.html',
  styleUrls: ['./add-edit-ls.component.scss']
})
export class AddEditLSComponent implements OnInit {

  lunetteSolaire: LunetteSolaire = new LunetteSolaire();
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
    ref: new FormControl(''),
    marque: new FormControl(''),
    prixAchat: new FormControl(''),
    prixVente: new FormControl(''),
    quantite: new FormControl(''),
    fournisseur: new FormControl(''),
  }, {validators : [this.prixAchatVenteValidator, Validators.required]})

  constructor(public dialogRef: MatDialogRef<AddEditLSComponent>,
    public lunetteSolaireService: LunetteSolaireService,
    public fournisseurService: FournisseurService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllFournisseur();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  getAllFournisseur(){
    this.fournisseurService.getFournisseurByCategorieName('lunette').subscribe(res => {
     this.allFournisseur = res
     if(this.allFournisseur[this.i].name != this.lunetteSolaire.fournisseur.name){
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
  postLunetteSolaireDetails() {
    this.isValidationInProgress = true;
    this.formValue.markAllAsTouched();
    if (!this.formValue.valid) {
      return;
    }
    console.log("fournisseur",this.formValue.value.fournisseur)
    let lunetteSolaire = {
      ref: this.formValue.value.ref,
      marque: this.formValue.value.marque,
      prixAchat: this.formValue.value.prixAchat,
      prixVente: this.formValue.value.prixVente,
      quantite: this.formValue.value.quantite,
      fournisseur: this.formValue.value.fournisseur
    }
    this.lunetteSolaireService.postLunetteSolaire(lunetteSolaire)
      .subscribe(res => {
        console.log(res);
        alert("Lunette Solaire ajoutée avec succès")
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.lunetteSolaireService.getLunetteSolaire();
      },
        err => { console.log(err) }
      )
  }

    //Update lunette Solaire
    updateLunetteSolaireDetails() {
      let lunetteSolaire = {
        id: this.lunetteSolaire.id,
        ref: this.formValue.value.ref,
        marque: this.formValue.value.marque,
        prixAchat: this.formValue.value.prixAchat,
        prixVente: this.formValue.value.prixVente,
        quantite: this.formValue.value.quantite,
        fournisseur: this.formValue.value.fournisseur
      }
      this.lunetteSolaireService.UpdateLunetteSolaire(lunetteSolaire)
        .subscribe(res => {
          console.log(res);
          alert("Lunette Solaire modifiée avec succès")
          let ref = document.getElementById('cancel')
          ref?.click();
          this.formValue.reset();
          this.lunetteSolaireService.getLunetteSolaire();
        },
          err => { console.log(err) }
        )
    }
    clickAddLunetteSolaire() {
      this.formValue.reset();
      this.showAdd = true;
      this.showUpdate = false;
    }
    //fill in fields from lunette solaire information
    onEdit(row: any) {
      this.showAdd = false;
      this.showUpdate = true;
      console.log("row",row);
      this.lunetteSolaire=row;
      this.lunetteSolaire.id = row.id;
      this.formValue.patchValue({
        id: row.id,
        ref: row.ref,
        marque: row.marque,
        prixAchat: row.prixAchat,
        prixVente: row.prixVente,
        quantite: row.quantite,
        fournisseur: row.fournisseur
      })
    }

}
