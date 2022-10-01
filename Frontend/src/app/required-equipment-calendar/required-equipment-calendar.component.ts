import { Component, TemplateRef, ChangeDetectionStrategy, OnInit, ViewChild  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import {Location} from '@angular/common';

import { MatSidenav } from '@angular/material/sidenav';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { EventColor } from 'calendar-utils';
import { th } from 'date-fns/locale';


const colors: Record<string, EventColor> = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'app-required-equipment-calendar',
  templateUrl: './required-equipment-calendar.component.html',
  styles: [
    `
      h3 {
        margin: 0 0 10px;
        color:#142e69;
      }
      pre {
        background-color: #f5f5f5;
        padding: 15px;
      }
  
    `,
  ],
  styleUrls: ['./required-equipment-calendar.component.css']
})
export class RequiredEquipmentCalendarComponent implements OnInit {
  @ViewChild('modalContent', { static: true })
  modalContent!: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData!: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-pencil-alt"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter((iEvent) => iEvent !== event);
        this.handleEvent('Deleted', event);
      },
    },
  ];

  refresh = new Subject<void>();

  events: CalendarEvent[] = [];


  activeDayIsOpen: boolean = true;


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

  user:any;
  equipment: any;
  highlightedRows = [];
  appointments:any;
  displayedColumns: string[] = ['Date','Product', 'Optician','View'];

  constructor(private location: Location,private modal: NgbModal, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute, private apiService: ApiService, private router: Router) { 
    this.user = this.apiService.getUserFromLocalstorage();
    this.activatedRoute.queryParams.subscribe(params => {
      this.equipment = params['id'];

    });
  }

  ngOnInit(): void {
    this.getAppointments();
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
    else if(data=='pdf'){
      this.router.navigate(['/create-pdf']);
    }
    else if(data == 'logout'){
      this.router.navigate(['/home-page']);
    }
  }

  viewApp(id: any){
   
    this.router.navigate(['/view-appointment'], {queryParams: {id: id}});
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }


  getAppointments() {

    this.apiService.getEquipmentAppByEquipment({id:this.equipment }).subscribe((response: any) => {
      this.appointments = response;

      for(let event of this.appointments) {

        var startTime = new Date(event.date);
        var endTime = new Date(event.date);
        endTime.setMinutes(endTime.getMinutes() + event.duration);
        console.log(endTime)

        this.events.push({
            start: new Date(startTime),
            end:  new Date(endTime),
            title: event.equipment.name ? event.equipment.name : 'Equipment',
            color: colors['red'],
            actions: this.actions,
            allDay: false,
            id: event.id
          });
      }
    })
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  
}
back(){
  this.location.back()
 } 

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors['red'],
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
  eventClicked({ event }: { event: CalendarEvent }): void {
    this.router.navigate(['/view-appointment'], {queryParams: {id: event.id}});
  }
}
