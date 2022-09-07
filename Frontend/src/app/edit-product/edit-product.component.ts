import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  form: FormGroup;
  product: any;
  productId: any

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { 

    this.form = this.formBuilder.group({
      name: ['', Validators.email],
      price: ['', Validators.required],
      makingTime: ['', Validators.required],
    });

    this.activatedRoute.queryParams.subscribe(params => {
      this.productId = params['id'];
    });

    

    this.api.getProductById({ id: this.productId }).subscribe((response: any) => {

      this.form = this.formBuilder.group({
      name: [response.name, Validators.email],
      price: [response.price, Validators.required],
      makingTime: [response.makingTime]
    });

  });  
  
}


  ngOnInit(): void {
  }

  onSubmit() {
    this.api.editProduct({
      id: parseInt(this.productId),
      name: this.form.get('name')?.value,
      price: this.form.get('price')?.value,
      makingTime: parseInt(this.form.get('makingTime')?.value),
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
