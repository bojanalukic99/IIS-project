import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { MatDialogRef, MatDialog,  MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ComfirmAdditionComponent } from '../comfirm-addition/comfirm-addition.component';

@Component({
  selector: 'app-new-material',
  templateUrl: './new-material.component.html',
  styleUrls: ['./new-material.component.css']
})
export class NewMaterialComponent implements OnInit {
  message: string = ""
  cancelButtonText = "Cancel"
  user: any;
  local_data: any;
form: FormGroup;

  constructor(private dialog: MatDialog,private formBuilder: FormBuilder, private api: ApiService,  @Inject(MAT_DIALOG_DATA) public data: any,  private dialogRef: MatDialogRef<NewMaterialComponent>) { 

    this.user = this.api.getUserFromLocalstorage();

    this.local_data = {...data};
  
    if (data) {
      this.message = data.message || this.message;
      if (data.buttonText) {
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
    }

 

    this.dialogRef.updateSize('600px','450px')
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      manufacturer: ['', Validators.required],
      unitOfMeasure: ['', Validators.required],
      quatity: ['', Validators.required]
    });

  }

 onConfirmClick(): void {
    this.dialogRef.close(true);
  }
  ngOnInit(): void {
  }




  openAlertDialog() {
    const dialogRef = this.dialog.open(ComfirmAdditionComponent,{
      data:{
        message: 'Added successfully!',
        buttonText: {
          cancel: 'DONE'
        }
      },
    });
  }

  yesDialog() {
    this.openAlertDialog();
    this.dialogRef.close({ event: 'yes-option', data: this.form.value });
  }
  noDialog() {
    this.dialogRef.close({ event: 'no-option', data: this.form.value });
  }
  onSubmit(){}

}
