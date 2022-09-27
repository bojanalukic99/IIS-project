import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
import { th } from 'date-fns/locale';
import { addMinutes } from 'date-fns';

@Component({
  selector: 'app-create-pdf',
  templateUrl: './create-pdf.component.html',
  styleUrls: ['./create-pdf.component.css']
})
export class CreatePdfComponent implements OnInit {

 
  form: any;
  user:any;
  appointments: any;
  date: any;
  appId: any;
  app: any;
  glasses = false;
  predictTime = new Date();
  displayedColumns: string[] = ['Optician', 'Date', 'Product'];
  optician= false;

  constructor(private location: Location,private formBuilder: FormBuilder, private api : ApiService, private activatedRoute: ActivatedRoute, private router: Router) 
  {
    this.user = this.api.getUserFromLocalstorage();

    this.activatedRoute.queryParams.subscribe(params => {
      this.appId = params['id'];

    });


    this.api.getAppointmentsById({id: this.appId}).subscribe((response: any)=> {
        this.app = response;
        this.predictTime = addMinutes(new Date(response.date), response.product.makingTime)


        if(this.app.product.productType == 0 || this.app.product.productType == 1){
          this.glasses = true;
        }
    });

 
  }

    captureScreen() {
      let data = document.getElementById('contentToConvert');
      html2canvas(data as any).then(canvas => {
          var imgWidth = 210;
          var pageHeight = 295;
          var imgHeight = canvas.height * imgWidth / canvas.width;
          var heightLeft = imgHeight;
          const contentDataURL = canvas.toDataURL('image/png');
          let pdfData = new jsPDF('p', 'mm', 'a4');
          var position = 0;
          pdfData.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
          pdfData.save(`MyPdf.pdf`);
      });
  }

  ngOnInit(): void {
    this.api.getCurrentUser().subscribe((response2: any) => {

      console.log(response2);

     localStorage.setItem('user', JSON.stringify(response2))

     this.user = this.api.getUserFromLocalstorage();

      if(this.user.userType === 2){
        this.optician = true
      }
    }); 
  }

  onSubmit(){

    this.api.getAllAppointmentsByDate({date : this.form.get('date')?.value,}).subscribe((response: any) => {
      this.appointments = response;
    })
  }

  back(){
    this.location.back()
   }
  
   done(){
    this.location.back()
   }
}
