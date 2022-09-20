import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { MatSidenav } from '@angular/material/sidenav';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddWorkHoursComponent } from '../add-work-hours/add-work-hours.component';
import { DatePipe } from '@angular/common';
import { EditWorkHoursComponent } from '../edit-work-hours/edit-work-hours.component';
import {Location} from '@angular/common';

@Component({
  selector: 'app-work-hours',
  templateUrl: './work-hours.component.html',
  styleUrls: ['./work-hours.component.css']
})
export class WorkHoursComponent implements OnInit {
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
  data: any;
  date = new Date();
  appointments:any;
  displayedColumns: string[] = ['Date', 'StartTime','EndTime','Edit', 'Delete'];
  equipmentId: any;
  id: any;

  constructor(private location: Location,private formBuilder: FormBuilder, private apiService: ApiService, private router: Router, private dialog: MatDialog, public datepipe: DatePipe) { 
    this.user = this.apiService.getUserFromLocalstorage();
  }

  ngOnInit(): void {

    this.apiService.getAllWorkingHourByOptician({
        id: this.user.id
    }).subscribe((response : any) => {
      this.appointments = response  
    });
  }

  back(){
    this.location.back()
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
  new(){
    this.openAlertDialog();
    this.ngOnInit();

  }

  edit(data: any){
    this.id= data.id;
    this.openAlertDialogEdit(data.id);
  }
  delete(data: any){
    this.apiService.deleteWorkHour({
      id: data.id
    }).subscribe((response: any) => {
      this.ngOnInit();
    })
    
  }
  openAlertDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
  
    dialogConfig.data = {
        id: 1,
        title: 'New'
    };
  
    const dialogRef = this.dialog.open(AddWorkHoursComponent,{
      data:{
        message: 'Add work hours',
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

           this.date = new Date(res.data.date);
          this.date.setDate(this.date.getDate() + 1)

          this.apiService.createWorkHour({
            date: this.date,
            startTime: this.data.startTime,
            endTime: this.data.endTime,
            optician: this.user
          }).subscribe((response: any) => {
            this.ngOnInit();
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

  openAlertDialogEdit(id: any) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
  
    dialogConfig.data = {
        id: 1,
        title: 'New'
    };
  
    const dialogRef = this.dialog.open(EditWorkHoursComponent,{
      data:{
        message: 'Edit work hours',
        id: id,
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

           this.date = new Date(res.data.date);
          this.date.setDate(this.date.getDate() + 1)

          this.apiService.editWorkHour({
            id: id,
            date: this.date,
            startTime: this.data.startTime,
            endTime: this.data.endTime,
            optician: this.user
          }).subscribe((response: any) => {
            this.ngOnInit();
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

 
}