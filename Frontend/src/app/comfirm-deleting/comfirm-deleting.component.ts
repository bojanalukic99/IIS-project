import { Component, Inject, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { MatDialogRef, MatDialog,  MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-comfirm-deleting',
  templateUrl: './comfirm-deleting.component.html',
  styleUrls: ['./comfirm-deleting.component.css']
})
export class ComfirmDeletingComponent implements OnInit {

  message: string = ""
  cancelButtonText = "Cancel"
  form : any;

  constructor(private formBuilder: FormBuilder, private location: Location, @Inject(MAT_DIALOG_DATA) private data: any,  private dialogRef: MatDialogRef<ComfirmDeletingComponent>) { 

    if (data) {
      this.message = data.message || this.message;
      if (data.buttonText) {
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
    }
    this.dialogRef.updateSize('220px','120px')
  }

 onConfirmClick(): void {
    this.dialogRef.close(true);
  }
  ngOnInit(): void {
  }
  back(){
    this.location.back()
   } 

   yesDialog() {
    this.dialogRef.close({ event: 'yes-option'});
  }
  noDialog() {
    this.dialogRef.close({ event: 'no-option' });
  }

}
