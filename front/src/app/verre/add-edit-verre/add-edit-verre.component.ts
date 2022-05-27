import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-verre',
  templateUrl: './add-edit-verre.component.html',
  styleUrls: ['./add-edit-verre.component.scss']
})
export class AddEditVerreComponent implements OnInit {

  formValue = new FormGroup({
    
  })
  constructor(public dialogRef: MatDialogRef<AddEditVerreComponent>) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
