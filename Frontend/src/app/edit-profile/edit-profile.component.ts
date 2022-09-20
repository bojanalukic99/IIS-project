import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { MatDialogRef, MatDialog,  MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {


  selecedType: any;
  message: string = ""
  cancelButtonText = "Cancel"
  user: any;
  local_data: any;
form: FormGroup;
id: any;

  constructor(private formBuilder: FormBuilder, private api: ApiService,  @Inject(MAT_DIALOG_DATA) public data: any,  private dialogRef: MatDialogRef<EditProfileComponent>, private router: Router, private activatedRoute: ActivatedRoute) { 

    this.user = this.api.getUserFromLocalstorage();

    this.local_data = {...data};
  
    if (data) {
      this.message = data.message || this.message;
      if (data.buttonText) {
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
    }

    this.id = data.id;
    this.form = this.formBuilder.group({
      email: ['', Validators.email],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required ],
      phone: ['', Validators.required],
      birthDate: ['', Validators.required],
      address: ['', Validators.required]
    });

    let jsonUser = localStorage.getItem('user');

    if(jsonUser) {
      this.user = JSON.parse(jsonUser);
    }

    if(!this.user) {
      return;
    }

    this.api.getUser({id: this.id}).subscribe((response: any) => {

      console.log(response);

      this.form = this.formBuilder.group({
      email: [response.email, Validators.email],
      firstName: [response.firstName, Validators.required],
      lastName: [response.lastName, Validators.required ],
      phone: [response.phone, Validators.required],
      birthDate: [response.birthDate, Validators.required],
      address: [response.address, Validators.required]
    });
  });  
    this.dialogRef.updateSize('600px','600px')
  

  }

 onConfirmClick(): void {
    this.dialogRef.close(true);
  }
  ngOnInit(): void {
  }



  yesDialog() {
    this.dialogRef.close({ event: 'yes-option', data: this.form.value });
  }
  noDialog() {
    this.dialogRef.close({ event: 'no-option', data: this.form.value });
  }
  onSubmit(){}

}
