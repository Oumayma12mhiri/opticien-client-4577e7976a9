import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-monture',
  templateUrl: './add-edit-monture.component.html',
  styleUrls: ['./add-edit-monture.component.scss']
})
export class AddEditMontureComponent implements OnInit {

  formValue = new FormGroup({
    
  })
  constructor(public dialogRef: MatDialogRef<AddEditMontureComponent>) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
