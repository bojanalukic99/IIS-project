import { Component, Inject, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { MatDialogRef, MatDialog,  MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-comfirm-addition',
  templateUrl: './comfirm-addition.component.html',
  styleUrls: ['./comfirm-addition.component.css']
})
export class ComfirmAdditionComponent implements OnInit {
  message: string = ""
  cancelButtonText = "Cancel"

  constructor( private location: Location, @Inject(MAT_DIALOG_DATA) private data: any,  private dialogRef: MatDialogRef<ComfirmAdditionComponent>) { 

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
