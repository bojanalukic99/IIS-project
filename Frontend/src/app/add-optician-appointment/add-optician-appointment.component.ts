import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  equipmentId: any;

  product: any;
  appointments: any;

  date: any = this.datepipe.transform(new Date(), "mm/dd/yyyy")

  displayedColumns: string[] = ['Date', 'Action'];

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router, private activatedRoute: ActivatedRoute, public datepipe: DatePipe) {
    this.form = this.formBuilder.group({
      
      product:['', Validators.email],
      date: [''],
     });

     this.optician = this.api.getUserFromLocalstorage();
     this.activatedRoute.queryParams.subscribe(params => {
      this.equipmentId = params['id'];
    });

   }

  ngOnInit(): void {

    let search = this.form.get('search')?.value ? this.form.get('search')?.value : ''


    this.api.getAllProducts({
      term:  search
    }).subscribe((response : any) => {
      console.log('aa');
      console.log(response);
      this.products = response  
    });
  }


  
  

  onSubmit() {

    let date = this.datepipe.transform(this.form.get('date')?.value, 'MM.dd.yyyy')

    if(date == null){
      date  = this.datepipe.transform(new Date(), 'MM.dd.yyyy')
    }

    this.api.findFreeAppointments({
      date: date,  
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
      date: date,
      productId: parseInt(this.selectedProduct)
    }).subscribe((response: any)=> {
      this.router.navigate(['/nurse-home-page']);
    })
  }
}