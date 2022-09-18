import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AddProductComponent } from '../add-product/add-product.component';
import { ApiService } from '../api.service';
import { EditMaterialComponent } from '../edit-material/edit-material.component';
import { NewMaterialComponent } from '../new-material/new-material.component';
@Component({
  selector: 'app-material-view',
  templateUrl: './material-view.component.html',
  styleUrls: ['./material-view.component.css']
})
export class MaterialViewComponent implements OnInit {
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
  materials:any;
  displayedColumns: string[] = ['Name', 'Quatity', 'Edit','Delete'];
  materialId: any
  selectedRow: any;

  constructor(private dialog: MatDialog,private formBuilder: FormBuilder, private apiService: ApiService, private router: Router) { 
    this.user = this.apiService.getUserFromLocalstorage();

    this.form = this.formBuilder.group({
      search: [''] 
    });
  }

  ngOnInit(): void {

    let search = this.form.get('search')?.value ? this.form.get('search')?.value : ''


    this.apiService.getAllMaterial({
      term:  search
    }).subscribe((response : any) => {
      console.log('aa');
      console.log(response);
      this.materials = response  
    });
  }


  linkCLick(id: any){
    this.openAlertDialogEdit(id);
  }

  link2CLick(id: any){
    this.apiService.deleteMaterial({id: id}).subscribe((response) => {
      this.ngOnInit();
    });
  }

  onSubmit(){
    let search = this.form.get('search')?.value ? this.form.get('search')?.value : ''


  this.apiService.getAllMaterial({
    term:  search
  }).subscribe((response : any) => {
    console.log('aa');
    console.log(response);
    this.materials = response  
  });
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
  
    const dialogRef = this.dialog.open(NewMaterialComponent,{
      data:{
        message: 'Add material',
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

          this.apiService.createMaterial({
            name: this.data.name,
            quatity: parseInt(this.data.quatity)
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
  
    const dialogRef = this.dialog.open(EditMaterialComponent,{
      data:{
        message: 'Edit material',
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

          this.apiService.editMaterial({
            id: id,
            name: this.data.name,
            quatity: parseInt(this.data.quatity)
            
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