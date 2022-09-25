import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { ComfirmAdditionComponent } from '../comfirm-addition/comfirm-addition.component';
import { MatDialogRef, MatDialog,  MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  message: string = ""
  cancelButtonText = "Cancel"
  user: any;
  selectedType: any;
  local_data: any;
form: FormGroup;
images: any;
  base64textString: any;
  productId: any;

  constructor(private sanitizer: DomSanitizer, private formBuilder: FormBuilder, private dialog: MatDialog, private api: ApiService,  @Inject(MAT_DIALOG_DATA) public data: any,  private dialogRef: MatDialogRef<AddProductComponent>) { 

    this.user = this.api.getUserFromLocalstorage();
    this.images = [];

    this.local_data = {...data};
  
    if (data) {
      this.message = data.message || this.message;
      if (data.buttonText) {
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
    }

 

    this.dialogRef.updateSize('600px','400px')
    this.form = this.formBuilder.group({
      name: ['',Validators.required],
      productType: ['', Validators.required],
      price: ['',Validators.required],
      makingTime: ['',Validators.required]
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
    this.dialogRef.close({ event: 'yes-option', data: this.form.value });
    this.openAlertDialog();

  }
  noDialog() {
    this.dialogRef.close({ event: 'no-option', data: this.form.value });
  }
  onSubmit(){}

}
