import { Component, Inject, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { MatDialogRef, MatDialog,  MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-notif-material',
  templateUrl: './notif-material.component.html',
  styleUrls: ['./notif-material.component.css']
})
export class NotifMaterialComponent implements OnInit {
  message: string = ""
  cancelButtonText = "Cancel"

  constructor( private location: Location, @Inject(MAT_DIALOG_DATA) private data: any,  private dialogRef: MatDialogRef<NotifMaterialComponent>) { 

    if (data) {
      this.message = data.message || this.message;
      if (data.buttonText) {
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
    }
    this.dialogRef.updateSize('300px','150px')
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