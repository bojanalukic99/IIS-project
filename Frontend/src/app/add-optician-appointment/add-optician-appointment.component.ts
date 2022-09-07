import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-add-optician-appointment',
  templateUrl: './add-optician-appointment.component.html',
  styleUrls: ['./add-optician-appointment.component.css']
})
export class AddOpticianAppointmentComponent implements OnInit {

  selectedProduct: any;

  selectedOptician: any;

  products: any;

  opticians: any;

  form: FormGroup;

  optician: any;

  product: any;
  appointments: any;

  displayedColumns: string[] = ['Date', 'Action'];

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router, public datepipe: DatePipe) {
    this.form = this.formBuilder.group({
      
      product:['', Validators.required],
      date: ['',Validators.required],
     });

     this.optician = this.api.getUserFromLocalstorage();


   }

  ngOnInit(): void {

    this.api.getAllProducts().subscribe((response: any)=> {
      this.products = response;
    })

  
  }

  onSubmit() {

    let date = this.datepipe.transform(this.form.get('date')?.value, 'dd.MM.yyyy')

    this.api.findFreeAppointments({
      date: this.form.get('date')?.value,  
      productId: parseInt(this.selectedProduct)
    }).subscribe((response: any) => {
      this.appointments = response;
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
  }

  schedule(date: any){
    this.api.createOpticianAppointment({
      date: new Date(date),
      productId: parseInt(this.selectedProduct)
    }).subscribe((response: any)=> {
      this.router.navigate(['/nurse-home-page']);
    })
  }
}