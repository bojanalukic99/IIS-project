import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-create-pdf',
  templateUrl: './create-pdf.component.html',
  styleUrls: ['./create-pdf.component.css']
})
export class CreatePdfComponent implements OnInit {

 
  form: any;
  appointments: any;
  date: any;
  displayedColumns: string[] = ['Optician', 'Date', 'Product'];

  constructor(private formBuilder: FormBuilder, private api : ApiService, private activatedRoute: ActivatedRoute, private router: Router) 
  {

    this.form = this.formBuilder.group({
      date: ['', Validators.required]
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

  }

  onSubmit(){

    this.api.getAllAppointmentsByDate({date : this.form.get('date')?.value,}).subscribe((response: any) => {
      this.appointments = response;
    })
  }
  }
