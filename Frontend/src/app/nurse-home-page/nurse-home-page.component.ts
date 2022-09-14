import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-nurse-home-page',
  templateUrl: './nurse-home-page.component.html',
 
  styleUrls: ['./nurse-home-page.component.css']
})
export class NurseHomePageComponent implements OnInit {
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
  appointments:any;
  displayedColumns: string[] = ['Date', 'Product', 'Optician'];

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private router: Router) { 
    this.user = this.apiService.getUserFromLocalstorage();
  
  
  }

  ngOnInit(): void {

    this.apiService.getAppointmentsByNurse({
      id: this.user.id
    }).subscribe((response : any) => {
      console.log('aaa')
      this.appointments = response  
    });
  }

  navigate(data : any){
    if(data === 'home'){
      this.router.navigate(['/nurse-home-page']);
    }
    else if(data === 'edit'){
      this.router.navigate(['/edit-profile']);
    }
    else if(data === 'products'){
      this.router.navigate(['/product-view']);
    }
    else if(data=='priceList'){
      this.router.navigate(['/priceList']);
    }
    else if(data=='logout'){
      this.router.navigate(['/home-page']);
    }
  }

  new(){
    this.router.navigate(['/new-optician-appointment']);
  }

  order()
  {
    this.router.navigate(['/product-view']);
  }
  register()
  {
    this.router.navigate(['/registartion']);
  }


}