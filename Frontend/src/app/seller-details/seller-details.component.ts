import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { MatSidenav } from '@angular/material/sidenav';
import {Location} from '@angular/common';
import { th } from 'date-fns/locale';

@Component({
  selector: 'app-seller-details',
  templateUrl: './seller-details.component.html',
  styleUrls: ['./seller-details.component.css']
})
export class SellerDetailsComponent implements OnInit {
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
  form: any;
  user:any;
  appointments:any;
  appId: any
  app: any;
  finished: any;
  glasses= false;
  optician= false;


  constructor(private location: Location, private formBuilder: FormBuilder, private apiService: ApiService, private router: Router, private activatedRoute: ActivatedRoute,) { 
    this.user = this.apiService.getUserFromLocalstorage();

    this.activatedRoute.queryParams.subscribe(params => {
      this.appId = params['id'];

    });


    this.apiService.getAppointmentsById({id: this.appId}).subscribe((response)=> {
        this.app = response;
        if(this.app.isScheduled == true){
          this.finished= 'YES!'
        }
        else{
          this.finished = 'NO!'
        }

        if(this.app.product.productType == 0 || this.app.product.productType == 1){
          this.glasses = true;
        }
    });

    this.form = this.formBuilder.group({
      comment: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.apiService.getCurrentUser().subscribe((response2: any) => {

      console.log(response2);

     localStorage.setItem('user', JSON.stringify(response2))

     this.user = this.apiService.getUserFromLocalstorage();

      if(this.user.userType === 2){
        this.optician = true
      }
  }); 

  }


 back(){
  this.location.back()
 }

 done(){
  this.location.back()
 }

 finish(){
  this.router.navigate(['/view-appointment'], {queryParams: {id: this.appId}});
}
}
