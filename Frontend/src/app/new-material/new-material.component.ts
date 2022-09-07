import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-new-material',
  templateUrl: './new-material.component.html',
  styleUrls: ['./new-material.component.css']
})
export class NewMaterialComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router) {
    this.form = this.formBuilder.group({
      name: ['',Validators.required],
      quatity: ['',Validators.required]
     });
   }

  ngOnInit(): void {
  }

  onSubmit() {



    this.api.createMaterial({
      name: this.form.get('name')?.value,
      quatity: parseInt(this.form.get('quatity')?.value)
      
    }).subscribe((response: any) => {
      this.router.navigate(['/material-view']);
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
