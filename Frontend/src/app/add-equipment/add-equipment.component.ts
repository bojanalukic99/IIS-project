import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.css']
})
export class AddEquipmentComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router) {
    this.form = this.formBuilder.group({
      name: ['',Validators.required]
     });
   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.api.createEquipment({
      name: this.form.get('name')?.value,    
    }).subscribe((response: any) => {
      this.router.navigate(['/equipment-view']);
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
