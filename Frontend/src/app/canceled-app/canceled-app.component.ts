import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { MatSidenav } from '@angular/material/sidenav';
import {Location} from '@angular/common';
@Component({
  selector: 'app-canceled-app',
  templateUrl: './canceled-app.component.html',
  styleUrls: ['./canceled-app.component.css']
})
export class CanceledAppComponent implements OnInit {

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
  displayedColumns: string[] = ['Date', 'Time', 'Optician', 'Product', 'Patient', 'Details', 'Reschedule'];
  productId: any
  selectedRow: any;

  constructor(private location: Location,private formBuilder: FormBuilder, private apiService: ApiService, private router: Router) { 
    this.user = this.apiService.getUserFromLocalstorage();

    this.form = this.formBuilder.group({
      search: [''] 
    });
  }

  ngOnInit(): void {

    let search = this.form.get('search')?.value ? this.form.get('search')?.value : ''


    this.apiService.getCanceled({
      term:  search
    }).subscribe((response : any) => {
      console.log('aa');
      console.log(response);
      this.appointments = response  
    });
  }
  back(){
    this.location.back()
   } 

  onSubmit(){
    let search = this.form.get('search')?.value ? this.form.get('search')?.value : ''

console.log(search)
  this.apiService.getCanceled({
    term:  search
  }).subscribe((response : any) => {
    console.log('aa');
    console.log(response);
    this.appointments = response  
  });
  }
  Details(data: any){
    this.router.navigate(['/seller-details'], {queryParams: {id: data}});
  }
  Reschedule(id: any){
    this.router.navigate(['/reschedule'], {queryParams: {id: id}});
  }
}
