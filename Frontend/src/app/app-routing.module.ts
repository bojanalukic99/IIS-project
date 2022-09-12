import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAppDetailsComponent } from './add-app-details/add-app-details.component';
import { AddEquipmentComponent } from './add-equipment/add-equipment.component';
import { AddOpticianAppointmentComponent } from './add-optician-appointment/add-optician-appointment.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddRequiredEquipmentComponent } from './add-required-equipment/add-required-equipment.component';
import { AddWorkHoursComponent } from './add-work-hours/add-work-hours.component';
import { AppointmentEquipmentComponent } from './appointment-equipment/appointment-equipment.component';
import { AppointmentMaterialComponent } from './appointment-material/appointment-material.component';
import { CreatePdfComponent } from './create-pdf/create-pdf.component';
import { EditEquipmentComponent } from './edit-equipment/edit-equipment.component';
import { EditMaterialComponent } from './edit-material/edit-material.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EquipmentViewComponent } from './equipment-view/equipment-view.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { MaterialViewComponent } from './material-view/material-view.component';
import { NewMaterialComponent } from './new-material/new-material.component';
import { NurseHomePageComponent } from './nurse-home-page/nurse-home-page.component';
import { OphthalmologistHomePageComponent } from './ophthalmologist-home-page/ophthalmologist-home-page.component';
import { PriceListComponent } from './price-list/price-list.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';
import { WorkHoursComponent } from './work-hours/work-hours.component';

const routes: Routes = [

  {path: 'home-page', component: HomePageComponent},
  {path: 'login', component:LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'optician-home-page', component: OphthalmologistHomePageComponent},
  {path: 'nurse-home-page', component:NurseHomePageComponent},
  {path: 'edit-profile', component:EditProfileComponent},
  {path: 'material-view', component:MaterialViewComponent},
  {path: 'new-material', component:NewMaterialComponent},
  {path: 'edit-material', component:EditMaterialComponent},
  {path: 'equipment-view', component:EquipmentViewComponent},
  {path: 'new-equipment', component:AddEquipmentComponent},
  {path: 'view-work-hour', component:WorkHoursComponent},
  {path: 'add-work-hours', component:AddWorkHoursComponent},
  {path: 'product-view', component:ProductViewComponent},
  {path: 'new-product', component:AddProductComponent},
  {path: 'new-optician-appointment', component:AddOpticianAppointmentComponent},
  {path: 'view-appointment', component:ViewAppointmentComponent},
  {path: 'add-required-equipment', component:AddRequiredEquipmentComponent},
  {path: 'edit-equipment', component:EditEquipmentComponent},
  {path: 'edit-product', component:EditProductComponent},
  {path: 'appointment-material', component:AppointmentMaterialComponent},
  {path: 'appointment-equipment', component: AppointmentEquipmentComponent},
  {path: 'priceList', component: PriceListComponent},
  {path: 'create-pdf', component: CreatePdfComponent},
  {path: 'app-details', component: AddAppDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
