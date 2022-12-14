import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { MatSidenav } from '@angular/material/sidenav';
import {Location} from '@angular/common';
@Component({
  selector: 'app-add-optician-appointment',
  templateUrl: './add-optician-appointment.component.html',
  styleUrls: ['./add-optician-appointment.component.css']
})
export class AddOpticianAppointmentComponent implements OnInit {
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
  selectedProduct: any;


  selectedOptician: any;

  products: any;

  opticians: any;
  minDate = new Date();

  form: FormGroup;

  optician: any;
  productId: any;
  DropdownVar=1;

  product: any;
  appointments: any;

  date: any = this.datepipe.transform(new Date(), "mm/dd/yyyy")

  displayedColumns: string[] = ['Date', 'Time','Optician','Schedule'];
  constructor(private location: Location,private formBuilder: FormBuilder, private api: ApiService, private router: Router, private activatedRoute: ActivatedRoute, public datepipe: DatePipe) {
    this.form = this.formBuilder.group({
      
      product:['', Validators.email],
      date: [''],
     });

     this.optician = this.api.getUserFromLocalstorage();
     this.activatedRoute.queryParams.subscribe(params => {
      this.productId = params['id'];
    });

    this.api.getProductById({ id: this.productId }).subscribe((response: any) => {

      this.form = this.formBuilder.group({
      product: [response.name, Validators.email]
    });

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

    let date = this.datepipe.transform(this.form.get('date')?.value, 'MM.dd.yyyy')

    if(date == null){
      date  = this.datepipe.transform(new Date(), 'MM.dd.yyyy')
    }

    this.api.findFreeAppointments({
      date: date,  
      productId: this.productId
    }).subscribe((response: any) => {
      this.appointments = response;
      console.log(this.appointments)
      console.log(this.productId)
      this.DropdownVar = 2;
    })
   
  }


  back(){
    this.location.back()
   } 
  

  onSubmit() {

    let date = this.datepipe.transform(this.form.get('date')?.value, 'MM.dd.yyyy')

    if(date == null){
      date  = this.datepipe.transform(new Date(), 'MM.dd.yyyy')
    }

    this.api.findFreeAppointments({
      date: date,  
      productId: this.productId
    }).subscribe((response: any) => {
      this.appointments = response;
      console.log(this.appointments)
      console.log(this.productId)
      this.DropdownVar = 2;
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

  Schedule(data: any){
    console.log('ovde')
    console.log(data.id )
      this.router.navigate(['/app-details'], { queryParams: { appointmentDate: data.date, optician: data.optician.id, productId: this.productId} });
  }

 
}


/*

 <form [formGroup]="form" (ngSubmit)="onSubmit()">
      
          <mat-form-field appearance="fill">
              <mat-label>Choose a date</mat-label>             
              <input matInput [matDatepicker]="picker" formControlName="date">       
              <mat-hint>MM/DD/YYYY</mat-hint>
              <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
              <mat-datepicker #picker></mat-datepicker>
            </mat-form-field>
            <mat-icon class="spaceLeft" (click)="onSubmit()">search</mat-icon>

          </form> 

*/