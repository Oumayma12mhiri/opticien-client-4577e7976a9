import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Client } from 'src/app/model/client';
import { Organisme } from 'src/app/model/organisme';
import { ClientServiceService } from 'src/app/service/client-service.service';
import { OrganismeServiceService } from 'src/app/service/organisme-service.service';
import { GroupeFamComponent } from '../groupe-fam/groupe-fam.component';
import { OrganismeComponent } from '../organisme/organisme.component';



@Component({
  selector: 'app-add-and-edit-client',
  templateUrl: './add-and-edit-client.component.html',
  styleUrls: ['./add-and-edit-client.component.scss']
})
export class AddAndEditClientComponent implements OnInit {

  client: Client = new Client();
  showAdd!: boolean;
  showUpdate!: boolean;
  maxDate: Date = new Date();
  isValidationInProgress = false;

  dateValidator: ValidatorFn = (control : AbstractControl) : ValidationErrors | null => {
    if (null != control.get('dateNaissance')) {
      let value = control.get('dateNaissance').value;
      if (new Date(value) >= this.maxDate) {
        return {'dateInvalid' : true};
      }
    }
    return null;
  }

  formValue = new FormGroup({
    reference: new FormControl(''),
    cin: new FormControl(''),
    nomPrenom: new FormControl(''),
    dateNaissance: new FormControl(''),
    age: new FormControl(''),
    email: new FormControl('', Validators.email),
    adresse: new FormControl(''),
    ville: new FormControl(''),
    pays: new FormControl(''),
    numAssureSocial: new FormControl(''),
    numTel1: new FormControl(''),
    numTel2: new FormControl(''),
    groupe: new FormControl(''),
    organisme: new FormControl(''),
    observations: new FormControl(''),
    matriculeFiscal: new FormControl('')
    //vendeur: new FormControl(''),
  }, {validators : [this.dateValidator, Validators.required]})
  //list = ['France', 'Belgique', 'Japon', 'Maroc'];

  constructor(
    private serviceClient: ClientServiceService,
    public serviceOrg: OrganismeServiceService,
    public dialogRef: MatDialogRef<AddAndEditClientComponent>,
    public dialog: MatDialog,
    public organisme: OrganismeComponent,
    public groupe: GroupeFamComponent
  ) { }
  public listOrg: Organisme[];
  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  openDialogOrg(): void {
    this.organisme.openDialogOrg();
  }

  openDialogGrp(): void {
    this.groupe.openDialogGrp();

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

  checkMailFormat() : boolean {
    if(!this.isValidationInProgress) {
      return false;
    }
    return this.formValue.controls['email'].errors?.email;
  }
  
  //Save client
  postClientDetails() {
    this.isValidationInProgress = true;
    this.formValue.controls['dateNaissance'].updateValueAndValidity();
    this.formValue.markAllAsTouched();
    if (!this.formValue.valid) {
      return;
    }
    let client = {
      reference: this.formValue.value.reference,
      cin: this.formValue.value.cin,
      nomPrenom: this.formValue.value.nomPrenom,
      dateNaissance: this.formValue.value.dateNaissance + "T00:00:00",
      age: this.formValue.value.age,
      email: this.formValue.value.email,
      adresse: this.formValue.value.adresse,
      ville: this.formValue.value.ville,
      pays: this.formValue.value.pays,
      numAssureSocial: this.formValue.value.numAssureSocial,
      numTel1: this.formValue.value.numTel1,
      numTel2: this.formValue.value.numTel2,
      chiffreAffaire: this.formValue.value.chiffreAffaire,
      solde: this.formValue.value.solde,
      organisme: this.formValue.value.organisme,
      groupe: this.formValue.value.groupe,
      observations: this.formValue.value.observations,
      matriculeFiscal: this.formValue.value.matriculeFiscal
    }

    this.serviceClient.postClient(client)
      .subscribe(res => {
        console.log(res);
        alert("client ajouté avec succès")
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.serviceClient.getClient();
      },
        err => { 
          alert(err.error.message);
        }
      )

  }

  clickAddClient() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
  //fill in fields from client information
  onEdit(row: any) {
    this.showAdd = false;
    this.showUpdate = true;
    console.log(row);
    this.client.id = row.id;
    this.formValue.patchValue({
      reference: row.reference,
      cin: row.cin,
      nomPrenom: row.nomPrenom,
      dateNaissance: row.dateNaissance,
      age: row.age,
      email: row.email,
      adresse: row.adresse,
      ville: row.ville,
      pays: row.pays,
      numAssureSocial: row.numAssureSocial,
      numTel1: row.numTel1,
      numTel2: row.numTel2,
      chiffreAffaire: row.chiffreAffaire,
      solde: row.solde,
      organisme: row.organisme,
      groupe: row.groupe,
      matriculeFiscal: row.matriculeFiscal,
      observations: row.observations
    })
  }
  //update client
  UpdateClientDetails() {
    console.log(this.formValue.value.pays);
    this.client.reference = this.formValue.value.reference;
    this.client.cin = this.formValue.value.cin;
    this.client.nomPrenom = this.formValue.value.nomPrenom;
    this.client.dateNaissance = this.formValue.value.dateNaissance;
    this.client.age = this.formValue.value.age;
    this.client.email = this.formValue.value.email;
    this.client.adresse = this.formValue.value.adresse;
    this.client.ville = this.formValue.value.ville;
    this.client.pays = this.formValue.value.pays;
    this.client.numAssureSocial = this.formValue.value.numAssureSocial;
    this.client.numTel1 = this.formValue.value.numTel1;
    this.client.numTel2 = this.formValue.value.numTel2;
    this.client.chiffreAffaire = this.formValue.value.chiffreAffaire;
    this.client.solde = this.formValue.value.solde;
    this.client.organisme = this.formValue.value.organisme;
    this.client.groupe = this.formValue.value.groupe;
    this.client.matriculeFiscal = this.formValue.value.matriculeFiscal;
    this.client.observations = this.formValue.value.observations;


    this.serviceClient.UpdateClient(this.client, this.client.id)
      .subscribe(res => {
        alert("client modifié avec succès");
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.serviceClient.getClient();
      })
  }

}
