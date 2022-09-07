import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  selectedType: any;
  form: FormGroup;
  user:any;


  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router) { 

    this.form = this.formBuilder.group({
      email: ['', Validators.email],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required ],
      phone: ['', Validators.required],
      birthDate: ['', Validators.required],
      address: ['', Validators.required]
    });

    let jsonUser = localStorage.getItem('user');

    if(jsonUser) {
      this.user = JSON.parse(jsonUser);
    }

    if(!this.user) {
      return;
    }

    this.api.getCurrentUser().subscribe((response: any) => {

      console.log(response);

      this.form = this.formBuilder.group({
      email: [response.email, Validators.email],
      firstName: [response.firstName, Validators.required],
      lastName: [response.lastName, Validators.required ],
      phone: [response.phone, Validators.required],
      birthDate: [response.birthDate, Validators.required],
      address: [response.address, Validators.required]
    });
  });  
  
}


  ngOnInit(): void {
  }

  onSubmit() {
    this.api.editProfile({
      id: this.user.id,
      email: this.form.get('email')?.value,
      firstName: this.form.get('firstName')?.value,
      lastName: this.form.get('lastName')?.value,
      address: this.form.get('address')?.value,
      phone: this.form.get('phone')?.value,
      birthDate: this.form.get('userType')?.value,
    }).subscribe((response: any) => {
      this.router.navigate(['/optician-home-page']);
    })
  }


  navigate(data : any){
    if(data === 'home'){
      if(this.user.userType == 1){
        this.router.navigate(['/optician-home-page']);

      }else {
        this.router.navigate(['/nurse-home-page']);
      }
    }

   
  }
}
