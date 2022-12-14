import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { MatDialogRef, MatDialog,  MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ComfirmEditingComponent } from '../comfirm-editing/comfirm-editing.component';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  message: string = ""
  cancelButtonText = "Cancel"
  user: any;
  local_data: any;
form: FormGroup;
id: any;

  constructor( private dialog: MatDialog,private formBuilder: FormBuilder, private api: ApiService,  @Inject(MAT_DIALOG_DATA) public data: any,  private dialogRef: MatDialogRef<EditProductComponent>, private router: Router, private activatedRoute: ActivatedRoute) { 

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
      name: ['', Validators.email],
      price: ['', Validators.required],
      makingTime: ['', Validators.required],
    });

    this.api.getProductById({ id: this.id }).subscribe((response: any) => {

      this.form = this.formBuilder.group({
      name: [response.name, Validators.email],
      price: [response.price, Validators.required],
      makingTime: [response.makingTime]
    });

  });  

    this.dialogRef.updateSize('600px','400px')
  

  }

 onConfirmClick(): void {
    this.dialogRef.close(true);
  }
  ngOnInit(): void {
  }

  openAlertDialog() {
    const dialogRef = this.dialog.open(ComfirmEditingComponent,{
      data:{
        message: 'Edited successfully!',
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
