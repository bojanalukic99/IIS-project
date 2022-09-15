import { Component, Inject, OnInit } from '@angular/core';

import { MatDialogRef, MatDialog,  MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-app-preview',
  templateUrl: './app-preview.component.html',
  styleUrls: ['./app-preview.component.css']
})
export class AppPreviewComponent implements OnInit {
  message: string = ""
  cancelButtonText = "Cancel"

  constructor(  @Inject(MAT_DIALOG_DATA) private data: any,  private dialogRef: MatDialogRef<AppPreviewComponent>) { 

    if (data) {
      this.message = data.message || this.message;
      if (data.buttonText) {
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
    }
    this.dialogRef.updateSize('200px','300px')
  }

 onConfirmClick(): void {
    this.dialogRef.close(true);
  }
  ngOnInit(): void {
  }

}
