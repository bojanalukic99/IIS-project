import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AddEquipmentComponent } from '../add-equipment/add-equipment.component';
import { AddProductComponent } from '../add-product/add-product.component';
import { ApiService } from '../api.service';
import { EditEquipmentComponent } from '../edit-equipment/edit-equipment.component';
import {Location} from '@angular/common';
import { ComfirmDeletingComponent } from '../comfirm-deleting/comfirm-deleting.component';

@Component({
  selector: 'app-equipment-view',
  templateUrl: './equipment-view.component.html',
  styleUrls: ['./equipment-view.component.css']
})
export class EquipmentViewComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  data: any;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
  form: any;
  user:any;
  equipments:any;
  displayedColumns: string[] = ['Name', 'Manufacturer','Edit','Delete'];
  equipmentId: any
  selectedRow: any;
  id: any;

  constructor(private location: Location,private dialog: MatDialog,private formBuilder: FormBuilder, private apiService: ApiService, private router: Router) { 
    this.user = this.apiService.getUserFromLocalstorage();

    this.form = this.formBuilder.group({
      search: [''] 
    });
  }

  ngOnInit(): void {

    let search = this.form.get('search')?.value ? this.form.get('search')?.value : ''


    this.apiService.getAllEquipment({
      term:  search
    }).subscribe((response : any) => {

      this.equipments = response  
    });
  }

openAlertDialogDelete() {
    const dialogRef = this.dialog.open(ComfirmDeletingComponent,{
      data:{
        message: 'Deleted successfully!',
        buttonText: {
          cancel: 'DONE'
        }
      },
    });
    dialogRef.afterClosed().subscribe((res) => {
      // Trigger After Dialog Closed 
      switch (res.event) {
        case "yes-option":
          this.apiService.deleteEquipment({id: this.id}).subscribe((response) => {
            this.ngOnInit();
          });
          
          break;
        case "no-option":
          console.log('No Clicked');
          break;
        default:
          break;
      }
    });
  }
 
  linkCLick(id: any){
    this.openAlertDialogEdit(id);
  }

  link2CLick(id: any){
    this.id = id;
    this.openAlertDialogDelete();
  }

  onSubmit(){
    let search = this.form.get('search')?.value ? this.form.get('search')?.value : ''


  this.apiService.getAllMaterial({
    term:  search
  }).subscribe((response : any) => {
    console.log('aa');
    console.log(response);
    this.equipments = response  
  });
  }
  back(){
    this.location.back()
   } 
  new(){
    this.openAlertDialog();
    this.ngOnInit();

  }

  openAlertDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
  
    dialogConfig.data = {
        id: 1,
        title: 'New'
    };
  
    const dialogRef = this.dialog.open(AddEquipmentComponent,{
      data:{
        message: 'Add equipment',
        buttonText: {
          cancel: 'DONE'
        }
      },
    });
    dialogRef.afterClosed().subscribe((res) => {
      // Trigger After Dialog Closed 
      switch (res.event) {
        case "yes-option":
          this.data = res.data;

          this.apiService.createEquipment({
            name: this.data.name,
            manufacturer: this.data.manufacturer
          }).subscribe((response: any) => {
              this.ngOnInit();
          })
        
          break;
        case "no-option":
          console.log('No Clicked');
          break;
        default:
          break;
      }
    });
  }

  openAlertDialogEdit(id: any) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
  
    dialogConfig.data = {
        id: 1,
        title: 'New'
    };
  
    const dialogRef = this.dialog.open(EditEquipmentComponent,{
      data:{
        message: 'Edit equipment',
        id: id,
        buttonText: {
          cancel: 'DONE'
        }
      },
    });
    dialogRef.afterClosed().subscribe((res) => {
      // Trigger After Dialog Closed 
      switch (res.event) {
        case "yes-option":
          this.data = res.data;

          this.apiService.editEquipment({
            id: id,
            name: this.data.name,
            manufacturer: this.data.manufacturer
          }).subscribe((response: any) => {
              this.ngOnInit();
          })
        
          break;
        case "no-option":
          console.log('No Clicked');
          break;
        default:
          break;
      }
    });
  }

 
}