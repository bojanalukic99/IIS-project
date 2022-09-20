import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AddProductComponent } from '../add-product/add-product.component';
import { ApiService } from '../api.service';
import { EditProductComponent } from '../edit-product/edit-product.component';
import {Location} from '@angular/common';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
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
  products:any;
  displayedColumns: string[] = ['Name', 'Price', 'MakingTime', 'Edit', 'Delete'];
  productId: any
  selectedRow: any;

  constructor(private location: Location,private dialog: MatDialog,private formBuilder: FormBuilder, private apiService: ApiService, private router: Router) { 
    this.user = this.apiService.getUserFromLocalstorage();

    this.form = this.formBuilder.group({
      search: [''] 
    });
  }

  ngOnInit(): void {

    let search = this.form.get('search')?.value ? this.form.get('search')?.value : ''


    this.apiService.getAllProducts({
      term:  search
    }).subscribe((response : any) => {
      console.log('aa');
      console.log(response);
      this.products = response  
    });
  }

  back(){
    this.location.back()
   } 

  navigate(data : any){
    if(data === 'home'){
      this.router.navigate(['/nurse-home-page']);
    }
    else if(data === 'edit'){
      this.router.navigate(['/edit-profile']);
    }
    else if(data === 'products'){
      this.router.navigate(['/product-view']);
    }
    else if(data=='priceList'){
      this.router.navigate(['/priceList']);
    }
    else if(data=='logout'){
      this.router.navigate(['/home-page']);
    }
  }



  linkCLick(id: any){
    this.openAlertDialogEdit(id);
  }

  link2CLick(id: any){
    this.apiService.deleteProduct({id: id}).subscribe((response) => {
      this.ngOnInit();
    });
  }

  onSubmit(){
    let search = this.form.get('search')?.value ? this.form.get('search')?.value : ''


  this.apiService.getAllProducts({
    term:  search
  }).subscribe((response : any) => {
    console.log('aa');
    console.log(response);
    this.products = response  
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
  
    const dialogRef = this.dialog.open(AddProductComponent,{
      data:{
        message: 'Add product',
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

          this.apiService.createProduct({
            name: this.data.name, 
            price: this.data.price, 
            makingTime: parseInt(this.data.makingTime),    
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
  
    const dialogRef = this.dialog.open(EditProductComponent,{
      data:{
        message: 'Edit product',
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

          this.apiService.editProduct({
            id: id,
            name: this.data.name, 
            price: this.data.price, 
            makingTime: this.data.makingTime,  
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