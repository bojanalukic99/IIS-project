import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  form: FormGroup;

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
  user:any;
  
  constructor(
    private location: Location,private formBuilder: FormBuilder, private apiService: ApiService, private router: Router) { 
    this.user = this.apiService.getUserFromLocalstorage();
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

    this.apiService.getCurrentUser().subscribe((response: any) => {

      console.log(response);
      this.user= response;


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
  back(){
    this.location.back()
   } 
  ngOnInit(): void {

  }

  navigate(data : any){
    console.log(data)
    if(data.userType === 1){
      this.router.navigate(['/menager-home-page']);
    }
    else if(data.userType === 2){
      this.router.navigate(['/optician-home-page']);
    }
    else if(data.userType === 3){
      this.router.navigate(['/nurse-home-page']);
    }
  }

 
  onSubmit() {
    this.apiService.editProfile({
      id: this.user.id,
      email: this.form.get('email')?.value,
      firstName: this.form.get('firstName')?.value,
      lastName: this.form.get('lastName')?.value,
      address: this.form.get('address')?.value,
      phone: this.form.get('phone')?.value,
      birthDate: this.form.get('userType')?.value,
    }).subscribe((response: any) => {
      this.navigate(this.user)
    })
  }
}