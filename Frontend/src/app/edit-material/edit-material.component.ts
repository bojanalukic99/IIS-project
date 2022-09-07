import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-edit-material',
  templateUrl: './edit-material.component.html',
  styleUrls: ['./edit-material.component.css']
})
export class EditMaterialComponent implements OnInit {

  form: FormGroup;
  material: any;
  materialId: any

  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router, private activatedRoute: ActivatedRoute) { 

    this.form = this.formBuilder.group({
      name: ['', Validators.email],
      quatity: ['', Validators.required]
    });

    this.activatedRoute.queryParams.subscribe(params => {
      this.materialId = params['id'];
    });

    

    this.api.getMaterialById({ id: this.materialId }).subscribe((response: any) => {

      this.form = this.formBuilder.group({
      name: [response.name, Validators.email],
      quatity: [response.quatity, Validators.required]
    });

  });  
  
}


  ngOnInit(): void {
  }

  onSubmit() {
    this.api.editMaterial({
      id: parseInt(this.materialId),
      name: this.form.get('name')?.value,
      quatity: parseInt(this.form.get('quatity')?.value),
    }).subscribe((response: any) => {
      this.router.navigate(['/material-view']);
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
