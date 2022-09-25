import { Component, Inject, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { MatDialogRef, MatDialog,  MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-comfirm-editing',
  templateUrl: './comfirm-editing.component.html',
  styleUrls: ['./comfirm-editing.component.css']
})
export class ComfirmEditingComponent implements OnInit {

  message: string = ""
  cancelButtonText = "Cancel"

  constructor( private location: Location, @Inject(MAT_DIALOG_DATA) private data: any,  private dialogRef: MatDialogRef<ComfirmEditingComponent>) { 

    if (data) {
      this.message = data.message || this.message;
      if (data.buttonText) {
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
    }
    this.dialogRef.updateSize('250px','120px')
  }

 onConfirmClick(): void {
    this.dialogRef.close(true);
  }
  ngOnInit(): void {
  }
  back(){
    this.location.back()
   } 

}
