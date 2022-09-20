import { Component, TemplateRef, ChangeDetectionStrategy, OnInit, ViewChild  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { MatSidenav } from '@angular/material/sidenav';
import {Location} from '@angular/common';

@Component({
  selector: 'app-all-optician-today',
  templateUrl: './all-optician-today.component.html',
  styleUrls: ['./all-optician-today.component.css']
})
export class AllOpticianTodayComponent implements OnInit {

 
 
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
  displayedColumns: string[] = ['Date', 'Time', 'Optician', 'Product', 'Patient', 'Details'];
  productId: any
  selectedRow: any;

  constructor(
    private location: Location, private formBuilder: FormBuilder, private apiService: ApiService, private router: Router) { 
    this.user = this.apiService.getUserFromLocalstorage();

    this.form = this.formBuilder.group({
      search: [''] 
    });

    this.apiService.getCurrentUser().subscribe((response: any) => {

      console.log(response);
      this.user= response;
  });  
  }

  ngOnInit(): void {

    let search = this.form.get('search')?.value ? this.form.get('search')?.value : ''


    this.apiService.getAppointmentsTodayByOptician({
      id: this.user.id,
      term:  search
    }).subscribe((response : any) => {
      console.log('aa');
      console.log(response);
      this.appointments = response  
    });
  }


  onSubmit(){
    let search = this.form.get('search')?.value ? this.form.get('search')?.value : ''


  this.apiService.getAppointmentsTodayByOptician({
    id: this.user.id,
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
  back(){
    this.location.back()
   } 

}
