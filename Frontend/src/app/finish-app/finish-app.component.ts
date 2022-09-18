import { Component, Inject, OnInit } from '@angular/core';

import { MatDialogRef, MatDialog,  MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-finish-app',
  templateUrl: './finish-app.component.html',
  styleUrls: ['./finish-app.component.css']
})
export class FinishAppComponent implements OnInit {

  message: string = ""
  cancelButtonText = "Cancel"

  constructor(  @Inject(MAT_DIALOG_DATA) private data: any,  private dialogRef: MatDialogRef<FinishAppComponent>) { 

    if (data) {
      this.message = data.message || this.message;
      if (data.buttonText) {
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
    }
    this.dialogRef.updateSize('350px','200px')
  }

 onConfirmClick(): void {
    this.dialogRef.close(true);
  }
  ngOnInit(): void {
  }

  yesDialog() {
    this.dialogRef.close({ event: 'yes-option', data: this.dialogRef });
  }
  noDialog() {
    this.dialogRef.close({ event: 'no-option', data: this.dialogRef });
  }

}
