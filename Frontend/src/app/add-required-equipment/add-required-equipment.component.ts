import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { ComfirmAdditionComponent } from '../comfirm-addition/comfirm-addition.component';
import { MatDialogRef, MatDialog,  MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-add-required-equipment',
  templateUrl: './add-required-equipment.component.html',
  styleUrls: ['./add-required-equipment.component.css']
})
export class AddRequiredEquipmentComponent implements OnInit {
 
  message: string = ""
  cancelButtonText = "Cancel"
  user: any;
  selectedEquipment: any;
  local_data: any;
form: FormGroup;
images: any;
  base64textString: any;
  productId: any;
  equipments: any;

  constructor(private sanitizer: DomSanitizer, private formBuilder: FormBuilder, private dialog: MatDialog, private api: ApiService,  @Inject(MAT_DIALOG_DATA) public data: any,  private dialogRef: MatDialogRef<AddRequiredEquipmentComponent>) { 

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
      equipment: ['',Validators.required],
      makingTime: ['',Validators.required]
     });


  }

 onConfirmClick(): void {
  
    this.dialogRef.close(true);
  }
  ngOnInit(): void {
    this.api.getAllEquipment({
      term: ''
    }).subscribe((response: any)=> {
        this.equipments = response;
    })
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
