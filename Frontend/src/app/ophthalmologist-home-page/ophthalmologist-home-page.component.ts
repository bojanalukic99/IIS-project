import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-ophthalmologist-home-page',
  templateUrl: './ophthalmologist-home-page.component.html',
  styleUrls: ['./ophthalmologist-home-page.component.css']
})
export class OphthalmologistHomePageComponent implements OnInit {

  user:any;
  highlightedRows = [];
  appointments:any;
  displayedColumns: string[] = ['Date','Product', 'Optician','View'];

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private router: Router) { 
    this.user = this.apiService.getUserFromLocalstorage();
  }

  ngOnInit(): void {

    this.apiService.getAppointmentsByNurse({
      id: this.user.id
    }).subscribe((response : any) => {
      console.log('aaa')
      this.appointments = response  
    });
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

  view(id: any){
   
    this.router.navigate(['/view-appointment'], {queryParams: {id: id}});
  }

}
