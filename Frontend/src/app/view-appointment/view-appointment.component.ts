import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.css']
})
export class ViewAppointmentComponent implements OnInit {

  user:any;
  highlightedRows = [];
  appointment:any;
  displayedColumns: string[] = ['Date','Product','View'];
  appointmentId : any;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private router: Router,  private activatedRoute: ActivatedRoute) { 

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
