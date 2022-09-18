import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-add-required-equipment',
  templateUrl: './add-required-equipment.component.html',
  styleUrls: ['./add-required-equipment.component.css']
})
export class AddRequiredEquipmentComponent implements OnInit {
  form: FormGroup;
  equipments: any;
  selectedEquipment: any;
  productId: any;



  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.form = this.formBuilder.group({
      equipment: ['',Validators.required],
      makingTime: ['', Validators.required]
     });


     this.activatedRoute.queryParams.subscribe(params => {
      this.productId = params['id'];
    });
   }



  ngOnInit(): void {
/*
    this.api.getAllEquipment().subscribe((response: any)=> {
      this.equipments=response;
    })*/

  }

  onSubmit() {

    console.log(this.selectedEquipment)

    this.api.addRequiredEquipment({
      productId: this.productId, 
      equipmentId: parseInt(this.selectedEquipment), 
      makingTime: parseFloat(this.form.get('makingTime')?.value),    
    }).subscribe((response: any) => {
      this.router.navigate(['/product-view']);
    })
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
  }
}
