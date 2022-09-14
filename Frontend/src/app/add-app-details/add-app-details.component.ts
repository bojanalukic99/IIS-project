import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-add-app-details',
  templateUrl: './add-app-details.component.html',
  styleUrls: ['./add-app-details.component.css']
})


export class AddAppDetailsComponent implements OnInit {

  firstFormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],

  });
  secondFormGroup = this.formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thridFormGroup = this.formBuilder.group({
    diopterRight: ['', Validators.required],
    astigmatismRight: ['', Validators.required],
    additionForReadingRight: ['', Validators.required],
  })
  isLinear = false;


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
  productId: any;
  appointmentDate : any;
  form: FormGroup;
  optician: any;
  patientVar = 0;
  patients: any;
  selectedPatient: any;
  
  displayedColumns: string[] = ['FirstName', 'LastName','Email','Phone', 'Choose', 'Edit'];

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router, private activatedRoute: ActivatedRoute, public datepipe: DatePipe) { 
    this.form = this.formBuilder.group({
      
      product:['', Validators.email],
      date: ['', Validators.required],
      optician: ['', Validators.required],
      diopterLeft: ['', Validators.required],
      diopterRight: ['', Validators.required],
      astigmatismLeft: ['', Validators.required],
      astigmatismRight: ['', Validators.required],
      addForReadingLeft: ['', Validators.required],
      addForReadingRigth: ['', Validators.required],
      distanceBetweenPupils: ['', Validators.required],
      typeOfGlass: ['', Validators.required],
      patient: ['', Validators.required],
     });

     
    this.activatedRoute.queryParams.subscribe(params => {
      this.productId = params['productId'];
      this.appointmentDate = params['appointmentDate'];
      this.optician = params['optician'];
    });

    this.api.getProductById({ id: this.productId }).subscribe((response: any) => {

      this.form = this.formBuilder.group({
      product: [response.name, Validators.email],
      date: [this.appointmentDate, Validators.required],
      optician: [this.optician, Validators.required]
    });
  });




  }

  
  ngOnInit(): void {
    this.api.getAllPatient().subscribe((response: any)=> {
      this.patients = response
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

  onSubmit(){}

  left(){}
  right(){}
  done(){
    
  }
  patient(){
    this.patientVar=1;
  }
  Choose(data: any){
    this.patientVar=0;
    this.selectedPatient = data;

  }
  Edit(data: any){}

 
}
