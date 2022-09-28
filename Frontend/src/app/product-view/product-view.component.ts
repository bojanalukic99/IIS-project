import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { MatSidenav } from '@angular/material/sidenav';
import {Location} from '@angular/common';
@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

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
  displayedColumns: string[] = ['Name', 'Type','Price', 'MakingTime', 'Action'];
  productId: any
  selectedRow: any;

  constructor(private location: Location,private formBuilder: FormBuilder, private apiService: ApiService, private router: Router) { 
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


  new(){
    this.router.navigate(['/new-product']);
  }

  edit(){
    this.router.navigate(['/edit-product']);
  }

  delete(){
    this.apiService.deleteMaterial({}).subscribe((response : any) => {
      this.products = response  
    });
  }

  linkCLick(id: any){
    this.router.navigate(['/app-details'], {queryParams: {id: id}});
  }

  link2CLick(id: any){
    this.router.navigate(['/edit-product'], {queryParams: {id: id}});
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

  tab(number: any){
    let search = this.form.get('search')?.value ? this.form.get('search')?.value : ''

    if(number == 1){
          this.apiService.getSunglasses({
              term : search
          }).subscribe((response:any)=> {
             this.products = response;
          })
    }
    else if(number == 2){
      this.apiService.getFrames({
        term : search
    }).subscribe((response:any)=> {
       this.products = response;
    })
    }
    else if(number == 3){
      this.apiService.getSoftLens({
        term : search
    }).subscribe((response:any)=> {
       this.products = response;
    })
    }
    else if(number == 4){
      this.apiService.getHardLens({
        term : search
    }).subscribe((response:any)=> {
       this.products = response;
    })
    }
  }
}
