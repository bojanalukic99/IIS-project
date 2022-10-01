import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AddEquipmentComponent } from '../add-equipment/add-equipment.component';
import { AddProductComponent } from '../add-product/add-product.component';
import { ApiService } from '../api.service';
import { EditEquipmentComponent } from '../edit-equipment/edit-equipment.component';
import {Location} from '@angular/common';
import { ComfirmDeletingComponent } from '../comfirm-deleting/comfirm-deleting.component';

@Component({
  selector: 'app-optician-equipment-view',
  templateUrl: './optician-equipment-view.component.html',
  styleUrls: ['./optician-equipment-view.component.css']
})
export class OpticianEquipmentViewComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  data: any;

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
  equipments:any;
  displayedColumns: string[] = ['Name', 'Manufacturer', 'Edit'];
  equipmentId: any
  selectedRow: any;
  id: any;

  constructor(private location: Location,private dialog: MatDialog,private formBuilder: FormBuilder, private apiService: ApiService, private router: Router) { 
    this.user = this.apiService.getUserFromLocalstorage();

    this.form = this.formBuilder.group({
      search: [''] 
    });
  }

  ngOnInit(): void {

    let search = this.form.get('search')?.value ? this.form.get('search')?.value : ''


    this.apiService.getAllEquipment({
      term:  search
    }).subscribe((response : any) => {

      this.equipments = response  
    });
  }

 
  linkCLick(id: any){
    this.router.navigate(['/equipmentAppointment-calendar'], {queryParams: {id: id}});
  }

  onSubmit(){
    let search = this.form.get('search')?.value ? this.form.get('search')?.value : ''


  this.apiService.getAllEquipment({
    term:  search
  }).subscribe((response : any) => {
    console.log('aa');
    console.log(response);
    this.equipments = response  
  });
  }
  back(){
    this.location.back()
   } 


}