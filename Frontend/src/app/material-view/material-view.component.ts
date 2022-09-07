import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-material-view',
  templateUrl: './material-view.component.html',
  styleUrls: ['./material-view.component.css']
})
export class MaterialViewComponent implements OnInit {

  user:any;
  materials:any;
  displayedColumns: string[] = ['Name', 'Quatity', 'Action'];

  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private router: Router) { 
    this.user = this.apiService.getUserFromLocalstorage();
  }

  ngOnInit(): void {

    this.apiService.getAllMaterial().subscribe((response : any) => {
      console.log('aa');
      console.log(response);
      this.materials = response  
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
  }

  new(){
    this.router.navigate(['/new-material']);
  }

  edit(){
    this.router.navigate(['/edit-material']);
  }

  delete(){
    this.apiService.deleteMaterial({}).subscribe((response : any) => {
      this.materials = response  
    });
  }
  linkCLick(id: any){

    this.router.navigate(['/edit-material'], {queryParams: {id: id}});
  }
}