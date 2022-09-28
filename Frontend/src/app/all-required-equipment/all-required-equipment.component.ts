import { Component, Inject, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { MatDialogRef, MatDialog,  MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../api.service';
import { auto } from '@popperjs/core';
@Component({
  selector: 'app-all-required-equipment',
  templateUrl: './all-required-equipment.component.html',
  styleUrls: ['./all-required-equipment.component.css']
})
export class AllRequiredEquipmentComponent implements OnInit {
  message: string = ""
  cancelButtonText = "Cancel"
  id: any;
  equipments: any;

  constructor(private api: ApiService, private location: Location, @Inject(MAT_DIALOG_DATA) private data: any,  private dialogRef: MatDialogRef<AllRequiredEquipmentComponent>) { 

    if (data) {
      this.message = data.message || this.message;
      this.id = data.id;
      if (data.buttonText) {
        this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
    }
    this.dialogRef.updateSize(auto)
  }

 onConfirmClick(): void {
    this.dialogRef.close(true);
  }
  ngOnInit(): void {
    this.api.getEquipmentByProduct({
      id: this.id
    }).subscribe((resonse: any)=> {
        this.equipments = resonse;
    })
  }
  back(){
    this.location.back()
   } 

}
