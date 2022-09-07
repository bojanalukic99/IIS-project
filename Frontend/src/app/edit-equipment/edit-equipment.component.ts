import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-edit-equipment',
  templateUrl: './edit-equipment.component.html',
  styleUrls: ['./edit-equipment.component.css']
})
export class EditEquipmentComponent implements OnInit {

  form: FormGroup;
  equipment: any;
  equipmentId: any

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { 

    this.form = this.formBuilder.group({
      name: ['', Validators.email],
    });

    this.activatedRoute.queryParams.subscribe(params => {
      this.equipmentId = params['id'];

      console.log(params['id'])
    });

    

    this.api.getEquipmentById({ id: this.equipmentId }).subscribe((response: any) => {

      this.form = this.formBuilder.group({
      name: [response.name, Validators.email],
    });

  });  
  
}


  ngOnInit(): void {
  }

  onSubmit() {
    this.api.editEquipment({
      id: parseInt(this.equipmentId),
      name: this.form.get('name')?.value,
    }).subscribe((response: any) => {
      this.router.navigate(['/equipment-view']);
    })
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

}
