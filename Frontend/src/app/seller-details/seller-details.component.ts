import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { MatSidenav } from '@angular/material/sidenav';
import {Location} from '@angular/common';

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
    });
  }

  ngOnInit(): void {

  }


 back(){
  this.location.back()
 }

}
