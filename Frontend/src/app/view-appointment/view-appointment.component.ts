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

  user:any;
  highlightedRows = [];
  appointment:any;
  displayedColumns: string[] = ['Date','Product','View'];
  appointmentId : any;


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


  constructor( private formBuilder: FormBuilder, private apiService: ApiService, private router: Router,  private activatedRoute: ActivatedRoute) { 

    this.activatedRoute.queryParams.subscribe(params => {
      this.appointmentId = params['id'];
    });


    console.log(this.appointmentId)

    this.apiService.getAppointmentsById({id : this.appointmentId}).subscribe((response: any)=> {    
      
      this.appointment = response;
    })
  

   
  }

  ngOnInit(): void {
   
   
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

  addMaterial(id: any){
    this.router.navigate(['/appointment-material'],  {queryParams: {id: id}});
  }

  addEquipment(){
    this.router.navigate(['/appointment-equipment']);
  } 
  


}