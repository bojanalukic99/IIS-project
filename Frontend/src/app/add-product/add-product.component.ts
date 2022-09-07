import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  form: FormGroup;


  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router) {
    this.form = this.formBuilder.group({
      name: ['',Validators.required],
      price: ['',Validators.required],
      makingTime: ['',Validators.required]
     });
   }

  ngOnInit(): void {



  }

  onSubmit() {
    this.api.createProduct({
      name: this.form.get('name')?.value, 
      price: this.form.get('price')?.value, 
      makingTime: parseFloat(this.form.get('makingTime')?.value),    
    }).subscribe((response: any) => {
      this.router.navigate(['/product-view']);
    })
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
  }
}
