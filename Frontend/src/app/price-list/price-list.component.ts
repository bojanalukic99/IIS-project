import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AddProductComponent } from '../add-product/add-product.component';
import { ApiService } from '../api.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.css']
})
export class PriceListComponent implements OnInit {
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
  user:any;
  form: FormGroup;
  priceLists:any;
  displayedColumns: string[] = ['Date', 'Product', 'Price'];

  constructor(private location: Location,private formBuilder: FormBuilder, private apiService: ApiService, private router: Router) { 
    this.form = this.formBuilder.group({
      search: [''] 
    });
   
  }

  ngOnInit(): void {

    let search = this.form.get('search')?.value ? this.form.get('search')?.value : ''


    this.apiService.getAllPriceList({
      term:  search
    }).subscribe((response : any) => {
      this.priceLists = response  
    });
  }


  onSubmit(){
    let search = this.form.get('search')?.value ? this.form.get('search')?.value : ''


    this.apiService.getAllPriceList({
      term:  search
    }).subscribe((response : any) => {
      this.priceLists = response  
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




 
}