import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { MatDialogRef, MatDialog,  MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ComfirmAdditionComponent } from '../comfirm-addition/comfirm-addition.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  gender: any;
  userType: any;

  message: string = ""
  cancelButtonText = "Cancel"
  user: any;
  local_data: any;

  constructor(
    private dialog: MatDialog, private formBuilder: FormBuilder, private api: ApiService,  @Inject(MAT_DIALOG_DATA) public data: any,  private dialogRef: MatDialogRef<RegistrationComponent>) { 

    this.user = this.api.getUserFromLocalstorage();

    this.local_data = {...data};
  
    if (data) {
      this.message = data.message || this.message;
      if (data.buttonText) {
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
    }

 

    this.dialogRef.updateSize('600px','800px')
    this.form = this.formBuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.required],
      passwordConfirmation: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required ],
      gender: ['', Validators.required],
      userType: ['', Validators.required],
      phone: ['', Validators.required]
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
    this.dialogRef.close({ event: 'yes-option', data: this.form.value});
  }
  noDialog() {
    this.dialogRef.close({ event: 'no-option', data: this.form.value });
  }
  onSubmit(){}

}
