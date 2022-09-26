import { DatePipe } from '@angular/common';
import { Component,  Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { MatSidenav } from '@angular/material/sidenav';
import { MatDialogRef, MatDialog,  MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppPreviewComponent } from '../app-preview/app-preview.component';
import {Location} from '@angular/common';

@Component({
  selector: 'app-reschedule',
  templateUrl: './reschedule.component.html',
  styleUrls: ['./reschedule.component.css']
})
export class RescheduleComponent implements OnInit {


  product: any;
  opticianName: any;
  opticianLastName: any;
  patientName: any;
  patientEmail: any;
  patientPhone: any;
  appointments: any;
  predictTime = new Date();
  appDate: any;
  date: any = this.datepipe.transform(new Date(), "mm/dd/yyyy")
  dateForm = this.formBuilder.group({

  })
  firstFormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],

  });
  secondFormGroup = this.formBuilder.group({
    diopterLeft: [''],
    astigmatismLeft: [''],
    additionForReadingLeft: [''],
    lensPowerLeft: [''],
    cylinderLeft: [''],
    axisFigureLeft: [''],
    additionFigureLeft: ['']
  
  });
  thridFormGroup = this.formBuilder.group({
    diopterRight: [''],
    astigmatismRight: [''],
    additionForReadingRight: [''],
    lensPowerRight: [''],
    cylinderRight: [''],
    axisFigureRight: [''],
    additionFigureRight: ['']
  });

  fourthFormGroup = this.formBuilder.group({
    distanceBetweenPupils: [''],
    typeOfGlass: [''],
    lensColor: ['']
  });

  isLinear = false;

  @ViewChild('productName') productName: MatSidenav | undefined;
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
  DropdownVar=1;
  appointmentDate : any;
  form: FormGroup;
  optician: any;
  patientVar = 0;
  patients: any;
  appointment : any;
  selectedPatient: any;
  glasses = false;
  appointmentId: any;
  displayedColumns: string[] = ['Date', 'Time','Optician','Schedule'];

  constructor(private location: Location, private formBuilder: FormBuilder, private api: ApiService, private router: Router, private activatedRoute: ActivatedRoute, public datepipe: DatePipe, private dialog: MatDialog) { 
    this.form = this.formBuilder.group({
      
     });
    
     
    this.activatedRoute.queryParams.subscribe(params => {
      this.appointmentId = params['id'];

    });
  }

  
  ngOnInit(): void {

    this.api.getAppointmentsById({id: this.appointmentId}).subscribe((response: any)=> {
      this.appointment = response;
      this.productId= response.product.id;

      this.api.getProductById({ id: this.productId }).subscribe((response: any) => {
        this.productName = response.name;
  
        if(response.productType == 0 || response.productType == 1){
            this.glasses=true;
        }
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
  
        this.patientName= response.patientName;
        this.patientEmail= response.email;
        this.patientPhone = response.phone;

        this.firstFormGroup = this.formBuilder.group({
          name: [response.patientName, Validators.required],
          email: [response.email, Validators.required],
          phone: [response.phone, Validators.required],
      
        });

        this.secondFormGroup = this.formBuilder.group({
          diopterLeft: [response.leftEye.diopter],
          astigmatismLeft: [response.leftEye.astigmatism],
          additionForReadingLeft: [response.leftEye.additionForReading],
          lensPowerLeft: [response.leftEye.lensPower],
          cylinderLeft: [response.leftEye.cylinder],
          axisFigureLeft: [response.leftEye.axisFigure],
          additionFigureLeft: [response.leftEye.additionFigure]
        
        });
        this.thridFormGroup = this.formBuilder.group({
          diopterRight: [response.rightEye.diopter],
          astigmatismRight: [response.rightEye.astigmatism],
          additionForReadingRight: [response.rightEye.additionForReading],
          lensPowerRight: [response.rightEye.lensPower],
          cylinderRight: [response.rightEye.cylinder],
          axisFigureRight: [response.rightEye.axisFigure],
          additionFigureRight: [response.rightEye.additionFigure]
        });
      
        this.fourthFormGroup = this.formBuilder.group({
          distanceBetweenPupils: [response.distanceBetweenPupils],
          typeOfGlass: [response.typeOfGlass],
          lensColor: [response.lensColor]
        });
    })

    

   
   
    
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

  Schedule(data: any){
    this.appointmentDate = data.date;
    this.optician = data.optician;
    this.productId=  this.productId;
    this.opticianName = data.optician.firstName;
    this.opticianLastName = data.optician.lastName;
    console.log(this.appointmentDate)
  }


  right(){
  
  }
  done(){

    this.api.createOpticianAppointment({
        date: this.appointmentDate,
        productId: parseInt(this.productId),
        opticianId: parseInt(this.optician.id),
        name: this.firstFormGroup.get('name')?.value,
        phone: this.firstFormGroup.get('phone')?.value,
        email: this.firstFormGroup.get('email')?.value,
        diopterLeft: this.secondFormGroup.get('diopterLeft')?.value,
        astigmatismLeft: this.secondFormGroup.get('astigmatismLeft')?.value,
        additionForReadingLeft: this.secondFormGroup.get('additionForReadingLeft')?.value,
        diopterRight: this.thridFormGroup.get('diopterRight')?.value,
        astigmatismRight: this.thridFormGroup.get('astigmatismRight')?.value,
        additionForReadingRight: this.thridFormGroup.get('additionForReadingRight')?.value,   
        distanceBetweenPupils : this.fourthFormGroup.get('distanceBetweenPupils')?.value,
        typeOfGlass: this.fourthFormGroup.get('typeOfGlass')?.value,
        lensColor: this.fourthFormGroup.get('lensColor')?.value,
        lensPowerLeft: this.secondFormGroup.get('lensPowerLeft')?.value,
        cylinderLeft: this.secondFormGroup.get('cylinderLeft')?.value,
        axisFigureLeft: this.secondFormGroup.get('axisFigureLeft')?.value,
        additionFigureLeft: this.secondFormGroup.get('additionFigureLeft')?.value,
        lensPowerRight: this.thridFormGroup.get('lensPowerRight')?.value,
        cylinderRight: this.thridFormGroup.get('cylinderRight')?.value,
        axisFigureRight: this.thridFormGroup.get('axisFigureRight')?.value,
        additionFigureRight: this.thridFormGroup.get('additionFigureRight')?.value
    }).subscribe((response: any) => {


          this.api.cancelApp({id: this.appointmentId}).subscribe((response: any)=>
          {
            this.openAlertDialog();
            this.router.navigate(['/all-canceled']); 
          })
 
               
    }); 

  }
  patient(){
    this.patientVar=1;
  }
  Choose(data: any){
    this.patientVar=0;
    this.selectedPatient = data;

  }
  Edit(data: any){}

  openAlertDialog() {
    const dialogRef = this.dialog.open(AppPreviewComponent,{
      data:{
        message: 'You have successfully made an appointment! Predicted time of finished product is',
        buttonText: {
          cancel: 'DONE'
        }
      },
    });
  }

  back(){
    this.location.back()
   } 
}
