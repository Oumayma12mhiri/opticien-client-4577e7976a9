import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-frs',
  templateUrl: './add-edit-frs.component.html',
  styleUrls: ['./add-edit-frs.component.scss']
})
export class AddEditFRSComponent implements OnInit {
  formValue = new FormGroup({
    
  })

  constructor(
    public dialogRef: MatDialogRef<AddEditFRSComponent>) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
