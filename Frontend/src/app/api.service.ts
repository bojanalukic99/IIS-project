import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  url = "https://localhost:44325";

  login(data: any) {
    return this.http.post(this.url + '/api/auth/login', data);
  }

  getCurrentUser() {
    return this.http.get(this.url + '/api/user/get-current-user-data', this.generateHeader());
  }

  getUser(data: any){
    return this.http.get(this.url + '/api/user/' + data.id, this.generateHeader());
  }

  userRegistration(data: any) {
    return this.http.post(this.url + '/api/user/register', data);
  }

  editProfile(data: any){
    return this.http.put(this.url + '/api/user/' + data.id, data, this.generateHeader());
  }

  getAppointmentsByOptician(data: any){
    return this.http.get(this.url + '/api/opticianAppointment/allByOptician/' + data.id, this.generateHeader());
  }

  getAppointmentsByNurse(data: any){
    return this.http.get(this.url + '/api/opticianAppointment/all', this.generateHeader());
  }

  getAppointmentsById(data: any){
    return this.http.get(this.url + '/api/opticianAppointment/getById/' + data.id, this.generateHeader());
  }

  getAllMaterial(){
    return this.http.get(this.url + '/api/material/all', this.generateHeader());
  }
  getMaterialById(data: any){
    return this.http.get(this.url + '/api/material/getById/' + data.id, this.generateHeader());
  }
  getEquipmentById(data: any){
    return this.http.get(this.url + '/api/equipment/getById/' + data.id, this.generateHeader());
  }
  getAllOpticians(){
    return this.http.get(this.url + '/api/user/allOpticians', this.generateHeader());
  }

  getAllProducts(){
    return this.http.get(this.url + '/api/product/all', this.generateHeader());
  }

  getAllWorkingHourByOptician(data: any){
    return this.http.get(this.url + '/api/workingHour/getBy/' + data.id, this.generateHeader());
  }

  createWorkingHour(data: any){
    return this.http.post(this.url + '/api/workingHour/add', data)
  }

  addRequiredEquipment(data: any){
    return this.http.post(this.url + '/api/requieredEquipment/add/' + data.productId + '/' + data.equipmentId, data)
  }

  getAllEquipment(){
    return this.http.get(this.url + '/api/equipment/all', this.generateHeader());
  }

  getProductById(data: any){
    return this.http.get(this.url + '/api/product/getById/' + data.id, this.generateHeader());
  }


  createOpticianAppointment(data: any){
    return this.http.post(this.url + '/api/opticianAppointment/add', data);

  }

  findFreeAppointments(data: any){
    return this.http.get(this.url + '/api/opticianAppointment/getFreeApointments/' + data.date + '/' +  data.productId, this.generateHeader())
  }


  getAllAppointmentsByDate(data: any){
    return this.http.get(this.url + '/api/opticianAppointment/allByDate/' + data.date, this.generateHeader())
  }

  createProduct(data: any){
    return this.http.post(this.url + '/api/product/add', data);
  }


  createMaterial(data: any){
    return this.http.post(this.url + '/api/material/add', data);
  }

  createEquipment(data: any){
    return this.http.post(this.url + '/api/equipment/add', data);
  }

  createWorkHour(data: any){
    return this.http.post(this.url + '/api/workingHour/add', data);
  }

  getAllPriceList(){
    return this.http.get(this.url + '/api/priceList/all', this.generateHeader());
  }

  editMaterial(data: any){
    return this.http.put(this.url + '/api/material/edit/' + data.id, data, this.generateHeader());
  }
  changeQuantity(data: any){
    return this.http.put(this.url + '/api/material/changeQuantity/' + data.id + '/' + data.quatity, data, this.generateHeader());
  }

  editProduct(data: any){
    return this.http.put(this.url + '/api/product/' + data.id, data, this.generateHeader());
  }

  editEquipment(data: any){
    return this.http.put(this.url + '/api/equipment/edit/' + data.id, data, this.generateHeader());
  }

  editWorkHour(data: any){
    return this.http.put(this.url + '/api/workHour/' + data.id, data, this.generateHeader());
  }

  deleteMaterial(data: any){
    return this.http.delete(this.url + '/api/material/' + data.id, this.generateHeader());
  }

  deleteProduct(data: any){
    return this.http.delete(this.url + '/api/product/' + data.id, this.generateHeader());
  }

  deleteEquipment(data: any){
    return this.http.delete(this.url + '/api/equipment/' + data.id, this.generateHeader());
  }

  deleteWorkHour(data: any){
    return this.http.delete(this.url + '/api/workHour/' + data.id, this.generateHeader());
  }
  getUserFromLocalstorage() {

    let userString = localStorage.getItem('user');

    if(!userString) {
      return null;
    }

    return JSON.parse(userString);
  }

  generateHeader() : any {

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem("token")
    }

    return {
      headers: headers
    };
  }
}

