import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCheckboxModule} from "@angular/material/checkbox";
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table'
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDialogModule } from '@angular/material/dialog';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { OphthalmologistHomePageComponent } from './ophthalmologist-home-page/ophthalmologist-home-page.component';
import { NurseHomePageComponent } from './nurse-home-page/nurse-home-page.component';
import { ViewAppointmentNurseComponent } from './view-appointment-nurse/view-appointment-nurse.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MaterialViewComponent } from './material-view/material-view.component';
import { NewMaterialComponent } from './new-material/new-material.component';
import { EditMaterialComponent } from './edit-material/edit-material.component';
import { EquipmentViewComponent } from './equipment-view/equipment-view.component';
import { AddEquipmentComponent } from './add-equipment/add-equipment.component';
import { AddWorkHoursComponent } from './add-work-hours/add-work-hours.component';
import { WorkHoursComponent } from './work-hours/work-hours.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddOpticianAppointmentComponent } from './add-optician-appointment/add-optician-appointment.component';
import { AddRequiredEquipmentComponent } from './add-required-equipment/add-required-equipment.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { EditEquipmentComponent } from './edit-equipment/edit-equipment.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AppointmentMaterialComponent } from './appointment-material/appointment-material.component';
import { AppointmentEquipmentComponent } from './appointment-equipment/appointment-equipment.component';
import { PriceListComponent } from './price-list/price-list.component';
import { CreatePdfComponent } from './create-pdf/create-pdf.component';
import { AddAppDetailsComponent } from './add-app-details/add-app-details.component';
import {AppPreviewComponent}from './app-preview/app-preview.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FlatpickrModule } from 'angularx-flatpickr';
import { FinishAppComponent } from './finish-app/finish-app.component';
import { EditWorkHoursComponent } from './edit-work-hours/edit-work-hours.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    RegistrationComponent,
    OphthalmologistHomePageComponent,
    NurseHomePageComponent,
    ViewAppointmentNurseComponent,
    EditProfileComponent,
    MaterialViewComponent,
    NewMaterialComponent,
    EditMaterialComponent,
    EquipmentViewComponent,
    AddEquipmentComponent,
    AddWorkHoursComponent,
    WorkHoursComponent,
    ProductViewComponent,
    AddProductComponent,
    AddOpticianAppointmentComponent,
    AddRequiredEquipmentComponent,
    ViewAppointmentComponent,
    EditEquipmentComponent,
    EditProductComponent,
    AppointmentMaterialComponent,
    AppointmentEquipmentComponent,
    PriceListComponent,
    CreatePdfComponent,
    AddAppDetailsComponent,
    AppPreviewComponent,
    FinishAppComponent,
    EditWorkHoursComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    HttpClientModule,
    CommonModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatTableModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatStepperModule,
    MatDialogModule,
    NgbModalModule,
    CalendarModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    FlatpickrModule.forRoot(),
  ],
  providers: [DatePipe],
  entryComponents:[MatDialogModule],
  bootstrap: [AppComponent]
})
export class AppModule { }