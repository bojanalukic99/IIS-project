import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAppDetailsComponent } from './add-app-details/add-app-details.component';
import { AddEquipmentComponent } from './add-equipment/add-equipment.component';
import { AddOpticianAppointmentComponent } from './add-optician-appointment/add-optician-appointment.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddRequiredEquipmentComponent } from './add-required-equipment/add-required-equipment.component';
import { AddWorkHoursComponent } from './add-work-hours/add-work-hours.component';
import { AllOpticianFutureComponent } from './all-optician-future/all-optician-future.component';
import { AllOpticianPreviousComponent } from './all-optician-previous/all-optician-previous.component';
import { AllOpticianTodayComponent } from './all-optician-today/all-optician-today.component';
import { AllOpticianComponent } from './all-optician/all-optician.component';
import { AppPreviewComponent } from './app-preview/app-preview.component';
import { AppointmentEquipmentComponent } from './appointment-equipment/appointment-equipment.component';
import { AppointmentMaterialComponent } from './appointment-material/appointment-material.component';
import { CanceledAppComponent } from './canceled-app/canceled-app.component';
import { ComfirmAdditionComponent } from './comfirm-addition/comfirm-addition.component';
import { ComfirmDeletingComponent } from './comfirm-deleting/comfirm-deleting.component';
import { ComfirmEditingComponent } from './comfirm-editing/comfirm-editing.component';
import { CreatePdfComponent } from './create-pdf/create-pdf.component';
import { EditEquipmentComponent } from './edit-equipment/edit-equipment.component';
import { EditMaterialComponent } from './edit-material/edit-material.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EquipmentViewComponent } from './equipment-view/equipment-view.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { MaterialViewComponent } from './material-view/material-view.component';
import { MenagerHomePageComponent } from './menager-home-page/menager-home-page.component';
import { NewMaterialComponent } from './new-material/new-material.component';
import { NurseHomePageComponent } from './nurse-home-page/nurse-home-page.component';
import { OphthalmologistHomePageComponent } from './ophthalmologist-home-page/ophthalmologist-home-page.component';
import { PriceListComponent } from './price-list/price-list.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductsComponent } from './products/products.component';
import { RegistrationComponent } from './registration/registration.component';
import { RescheduleComponent } from './reschedule/reschedule.component';
import { SellerAppFutureComponent } from './seller-app-future/seller-app-future.component';
import { SellerAppPreviousComponent } from './seller-app-previous/seller-app-previous.component';
import { SellerAppTodayComponent } from './seller-app-today/seller-app-today.component';
import { SellerDetailsComponent } from './seller-details/seller-details.component';
import { UsersComponent } from './users/users.component';
import { ViewAppointmentNurseComponent } from './view-appointment-nurse/view-appointment-nurse.component';
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
  {path: 'view-app-seller', component: ViewAppointmentNurseComponent},
  {path: 'add-required-equipment', component:AddRequiredEquipmentComponent},
  {path: 'edit-equipment', component:EditEquipmentComponent},
  {path: 'edit-product', component:EditProductComponent},
  {path: 'appointment-material', component:AppointmentMaterialComponent},
  {path: 'appointment-equipment', component: AppointmentEquipmentComponent},
  {path: 'priceList', component: PriceListComponent},
  {path: 'create-pdf', component: CreatePdfComponent},
  {path: 'app-details', component: AddAppDetailsComponent},
  {path: 'app-preview', component: AppPreviewComponent},
  {path: 'menager-home-page', component: MenagerHomePageComponent},
  {path: 'users', component:UsersComponent},
  {path: 'products', component: ProductsComponent },
  {path: 'edit-user', component:EditUserComponent},
  {path: 'appSellerPrevious', component:SellerAppPreviousComponent},
  {path: 'appSellerToday', component:SellerAppTodayComponent},
  {path: 'appSellerFuture', component:SellerAppFutureComponent},
  {path: 'seller-details', component:SellerDetailsComponent},
  {path: 'all-optician', component: AllOpticianComponent},
  {path: 'all-optician-previous', component: AllOpticianPreviousComponent},
  {path: 'all-optician-today', component: AllOpticianTodayComponent},
  {path: 'all-optician-future', component: AllOpticianFutureComponent},
  {path: 'comfirm-addition', component:ComfirmAdditionComponent},
  {path: 'comfirm-editing', component:ComfirmEditingComponent},
  {path: 'comfirm-deleting', component:ComfirmDeletingComponent},
  {path: 'all-canceled', component:CanceledAppComponent},
  {path: 'reschedule', component:RescheduleComponent},

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
