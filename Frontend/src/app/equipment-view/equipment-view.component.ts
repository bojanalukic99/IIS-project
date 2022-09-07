import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-equipment-view',
  templateUrl: './equipment-view.component.html',
  styleUrls: ['./equipment-view.component.css']
})
export class EquipmentViewComponent implements OnInit {

  user:any;
  equipments:any;
  displayedColumns: string[] = ['Name', 'Action'];
  equipmentId: any

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private router: Router) { 
    this.user = this.apiService.getUserFromLocalstorage();
  }

  ngOnInit(): void {

    this.apiService.getAllEquipment().subscribe((response : any) => {
      console.log('aa');
      console.log(response);
      this.equipments = response  
    });
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
    else if(data=='pdf'){
      this.router.navigate(['/create-pdf']);
    }
    else if(data == 'logout'){
      this.router.navigate(['/home-page']);
    }
  }  new(){
    this.router.navigate(['/new-equipment']);
  }

  linkCLick(id: any){

    this.router.navigate(['/edit-equipment'], {queryParams: {id: id}});
  }
}