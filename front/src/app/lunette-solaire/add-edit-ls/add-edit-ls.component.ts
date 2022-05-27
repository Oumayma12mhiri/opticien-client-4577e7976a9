import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-ls',
  templateUrl: './add-edit-ls.component.html',
  styleUrls: ['./add-edit-ls.component.scss']
})
export class AddEditLSComponent implements OnInit {

  formValue = new FormGroup({
    
  })
  constructor(public dialogRef: MatDialogRef<AddEditLSComponent>) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
