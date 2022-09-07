import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-work-hours',
  templateUrl: './add-work-hours.component.html',
  styleUrls: ['./add-work-hours.component.css']
})
export class AddWorkHoursComponent implements OnInit {

  form: FormGroup;
  user: any;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router) {

    this.user = this.api.getUserFromLocalstorage();


    this.form = this.formBuilder.group({
      date: ['',Validators.required],
      startTime: ['',Validators.required],
      endTime: ['',Validators.required],
     });
   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.api.createWorkHour({
      date: this.form.get('date')?.value,
      startTime: this.form.get('startTime')?.value,
      endTime: this.form.get('endTime')?.value,
      optician: this.user
    }).subscribe((response: any) => {
      this.router.navigate(['/view-work-hour']);
    })
  }

 navigate(data : any){
    if(data === 'login'){
      this.router.navigate(['/login']);
    }

    else if(data === 'registration'){
      this.router.navigate(['/registration']);
    }
    else if(data === 'edit'){
      this.router.navigate(['/edit-profile']);
    }
    else if(data === 'appointments'){
      this.router.navigate(['/view-appointments-optician']);
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

}
