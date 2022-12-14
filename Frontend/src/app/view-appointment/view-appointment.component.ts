import { Component, TemplateRef,ChangeDetectionStrategy, OnInit, ViewChild, LOCALE_ID, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import {
  CalendarView,
  CalendarDateFormatter,
  DateAdapter
} from 'angular-calendar';
import { addPeriod, CalendarSchedulerEvent, CalendarSchedulerEventAction, CalendarSchedulerViewComponent, DAYS_IN_WEEK, endOfPeriod, SchedulerDateFormatter, SchedulerEventTimesChangedEvent, SchedulerViewDay, SchedulerViewHour, SchedulerViewHourSegment, startOfPeriod, subPeriod } from 'angular-calendar-scheduler';
import { addMonths, endOfDay } from 'date-fns';
import { Subject } from 'rxjs';
import { th } from 'date-fns/locale';
import { MatDialogRef, MatDialog,  MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppPreviewComponent } from '../app-preview/app-preview.component';
import { FinishAppComponent } from '../finish-app/finish-app.component';
import {Location} from '@angular/common';
import { AppointmentMaterialComponent } from '../appointment-material/appointment-material.component';


@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css'],
  providers: [{
    provide: CalendarDateFormatter,
    useClass: SchedulerDateFormatter
}]
})
export class ViewAppointmentComponent implements OnInit {
  
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

  activeDayIsOpen: boolean = true;
  materials:any;

  user:any;
  highlightedRows = [];
  appointment:any;
  displayedColumns: string[] = ['Name', 'Manufacturer','UnitOfMesure','Quatity', 'ADD'];
  appointmentId : any;

  productName: any;
  appDate: any;
  leftEye: any;
  diopterLeft: any;
  diopterRight: any;
  astigmatismLeft: any;
  astigmatismRight: any;
  addReadingLeft: any;
  addReadingRight: any;
  glass: any;
  distance: any;
  addedMaterials: any;


  CalendarView = CalendarView;

  view: CalendarView = CalendarView.Week;
  viewDate: Date = new Date();
  viewDays: number = DAYS_IN_WEEK;
  refresh: Subject<any> = new Subject();
  locale: string = 'en';
  hourSegments: number = 4;
  weekStartsOn: number = 1;
  startsWithToday: boolean = true;
  excludeDays: number[] = []; // [0];
  weekendDays: number[] = [0,6];
  dayStartHour: number = 6;
  dayEndHour: number = 22;

  minDate: Date = new Date();
  maxDate: Date = endOfDay(addMonths(new Date(), 1));

  form: FormGroup;
  glasses= false;
  


  prevBtnDisabled: boolean = false;
  nextBtnDisabled: boolean = false;

  actions: CalendarSchedulerEventAction[] = [
      {
          when: 'enabled',
          label: '<span class="valign-center"><i class="material-icons md-18 md-red-500">cancel</i></span>',
          title: 'Delete',
          onClick: (event: CalendarSchedulerEvent): void => {
              console.log('Pressed action \'Delete\' on event ' + event.id);
          }
      },
      {
          when: 'disabled',
          label: '<span class="valign-center"><i class="material-icons md-18 md-red-500">autorenew</i></span>',
          title: 'Restore',
          onClick: (event: CalendarSchedulerEvent): void => {
              console.log('Pressed action \'Restore\' on event ' + event.id);
          }
      }
  ];

  events: CalendarSchedulerEvent[] = [];

  @ViewChild(CalendarSchedulerViewComponent) calendarScheduler: CalendarSchedulerViewComponent | undefined;

  constructor(private location: Location, private formBuilder: FormBuilder, private apiService: ApiService, private router: Router,  private activatedRoute: ActivatedRoute, private dialog: MatDialog) { 

    
    this.form = this.formBuilder.group({
      comment: [''],
      search: ['']
    });

    
    this.activatedRoute.queryParams.subscribe(params => {
      this.appointmentId = params['id'];
    });


    console.log(this.appointmentId)

    this.apiService.getAppointmentsById({id : this.appointmentId}).subscribe((response: any)=> {    
      
      this.appointment = response;
      this.productName = response.product.name;
      this.appDate = response.date;
      this.diopterLeft= response.leftEye.diopter;
      this.diopterRight=response.rightEye.diopter;
      this.astigmatismLeft= response.leftEye.astigmatism;
      this.astigmatismRight= response.rightEye.astigmatism;
      this.addReadingLeft= response.leftEye.additionForReading;
      this.addReadingRight= response.rightEye.additionForReading;
      this.glass= response.typeOfGlass;
      this.distance= response.distanceBetweenPupils;

      if(response.product.productType==0 || response.product.productType==1){
        this.glasses=true;
      }

      this.appointment = response;

      this.form = this.formBuilder.group({
        product: [response.product.name],
        date: [response.date],
        time: [response.data.getTime],
        typeofGlasses: [response.typeOfGlass],
        distanceBetweenPupils: [response.distanceBetweenPupils],
        comment: [response.comment]
      });
    })
  

   
  }

  ngOnInit(): void {

    let search = this.form.get('search')?.value ? this.form.get('search')?.value : ''

    this.apiService.getAllMaterial({
      term:  search
    }).subscribe((response : any) => {
      console.log('aa');
      console.log(response);
      this.materials = response 
     
    });
   

    this.apiService.getMaterailByApp({id: this.appointmentId}).subscribe((response : any)=> {
      this.addedMaterials = response;
      console.log('MATERIAL')
      console.log(response)
      
    })
  }
  back(){
    this.location.back()
   } 
  
   linkCLick(id: any){
      this.openAlertDialogAddMaterial(id);

  }

  navigate(data : any){
    if(data === 'home'){
      this.router.navigate(['/optician-home-page']);
    }

    else if(data === 'edit'){
      this.router.navigate(['/edit-profile']);
    }
    else if(data === 'material'){
      this.router.navigate(['/material-view']);
    }
    else if(data === 'equipment'){
      this.router
      .navigate(['/equipment-view']);
    }
    else if(data === 'workHour'){
      this.router.navigate(['/view-work-hour']);
    }
  }

  addMaterial(){
    this.router.navigate(['/appointment-material'],  {queryParams: {id: this.appointment.id}});
  }

  addEquipment(){
    this.router.navigate(['/appointment-equipment']);
  } 
   
  onSubmit(){
     let search = this.form.get('search')?.value ? this.form.get('search')?.value : ''


  this.apiService.getAllMaterial({
    term:  search
  }).subscribe((response : any) => {
    console.log('aa');
    console.log(response);
    this.materials = response  
  });
  }
  done(){
    this.apiService.addComment({
      id: this.appointmentId,
      comment: this.form.get('comment')?.value,
    }).subscribe((response)=> {
      this.router.navigate(['/optician-home-page']);

    })


  }

  openAlertDialog() {
   
    const dialogRef = this.dialog.open(FinishAppComponent,{
      data:{
        message: ' Is the product finished?',
        buttonText: {
          cancel: 'DONE'
        }
      },
    });
    dialogRef.afterClosed().subscribe((res) => {
      // Trigger After Dialog Closed 
      switch (res.event) {
        case "yes-option":
          this.done();

          this.apiService.finish({
            id: this.appointmentId
          }).subscribe((response)=> {
            this.router.navigate(['/optician-home-page']);    
          })
          
          break;
        case "no-option":
          console.log('No Clicked');
          break;
        default:
          break;
      }
    });
  }

  openAlertDialogAddMaterial(id: any) {
   
    const dialogRef = this.dialog.open(AppointmentMaterialComponent,{
      data:{
        message: 'Enter quantity',
        buttonText: {
        cancel: 'DONE'
        }
      },
    });
    dialogRef.afterClosed().subscribe((res) => {
      // Trigger After Dialog Closed 
      switch (res.event) {
        case "yes-option":
           
          this.data = res.data;

          this.apiService.addRequiredMaterial({
            materialId: parseInt(id),
            appointmentId : parseInt(this.appointmentId),
            quatity: parseInt(this.data.quatity)
          }).subscribe((response : any)=> {
            this.ngOnInit();
          })
          this.apiService.changeQuantity({
            id: parseInt(id),
            quatity: parseInt(this.data.quatity)
          }).subscribe((response: any) => {
            this.ngOnInit();
          })
          this.ngOnInit();
          
          break;
        case "no-option":
          console.log('No Clicked');
          break;
        default:
          break;
      }
    });
  }

  finish(){
    this.openAlertDialog();
  }
}