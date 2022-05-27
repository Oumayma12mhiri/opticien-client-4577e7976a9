import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-divers',
  templateUrl: './add-edit-divers.component.html',
  styleUrls: ['./add-edit-divers.component.scss']
})
export class AddEditDiversComponent implements OnInit {

  formValue = new FormGroup({
    
  })
  constructor(public dialogRef: MatDialogRef<AddEditDiversComponent>) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
