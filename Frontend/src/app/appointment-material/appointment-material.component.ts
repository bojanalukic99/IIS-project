import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-appointment-material',
  templateUrl: './appointment-material.component.html',
  styleUrls: ['./appointment-material.component.css']
})
export class AppointmentMaterialComponent implements OnInit {

  form: FormGroup;
  selectedMaterial: any;
  materialId: any
  materials: any
  name: any;
  newQuantity: any;
  appointmentId: any

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { 

    this.form = this.formBuilder.group({
      material: ['', Validators.email],
      quatity: ['', Validators.required]
    });

    this.activatedRoute.queryParams.subscribe(params => {
      this.appointmentId = params['id'];

      console.log(params['id'])
    });
 

    this.api.getMaterialById({ id: this.selectedMaterial }).subscribe((response: any) => {

      this.name = response.name


  });  
  


}


  ngOnInit(): void {

    this.api.getAllMaterial().subscribe((response: any)=> {
        this.materials = response;
    })
  }

  onSubmit() {
    this.api.changeQuantity({
      id: parseInt(this.selectedMaterial),
      quatity: parseInt(this.form.get('quatity')?.value),
    }).subscribe((response: any) => {
      this.router.navigate(['/view-appointment'],  {queryParams: {id: this.appointmentId}});
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
