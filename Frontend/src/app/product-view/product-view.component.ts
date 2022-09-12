import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  form: any;
  user:any;
  products:any;
  displayedColumns: string[] = ['Name', 'Price', 'MakingTime', 'Action', 'Edit'];
  productId: any
  selectedRow: any;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private router: Router) { 
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
    this.router.navigate(['/new-optician-appointment'], {queryParams: {id: id}});
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
}
