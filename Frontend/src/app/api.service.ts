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

  getAppointments(data: any){
    return this.http.get(this.url + '/api/opticianAppointment/all?term=' + data.term, this.generateHeader());
  }
  getAppointmentsPrevious(data: any){
    return this.http.get(this.url + '/api/opticianAppointment/allPrevious?term=' + data.term, this.generateHeader());
  }
  getAppointmentsToday(data: any){
    return this.http.get(this.url + '/api/opticianAppointment/allToday?term=' + data.term, this.generateHeader());
  }
  getAppointmentsFuture(data: any){
    return this.http.get(this.url + '/api/opticianAppointment/allFuture?term=' + data.term, this.generateHeader());
  }
  getCanceled(data: any){
    return this.http.get(this.url + '/api/opticianAppointment/allCanceled?term=' + data.term, this.generateHeader());
  }
  getAppointmentsPreviousByOptician(data: any){
    return this.http.get(this.url + '/api/opticianAppointment/allPreviousByOptician/' + data.id + '?term=' + data.term, this.generateHeader());
  }
  getAppointmentsTodayByOptician(data: any){
    return this.http.get(this.url + '/api/opticianAppointment/allTodayByOptician/' + data.id + '?term=' + data.term, this.generateHeader());
  }
  getAppointmentsFutureByOptician(data: any){
    return this.http.get(this.url + '/api/opticianAppointment/allFutureByOptician/' + data.id + '?term=' + data.term, this.generateHeader());
  }

  cancelApp(data: any)
  {
    return this.http.put(this.url + '/api/opticianAppointment/cancel/' + data.id, data, this.generateHeader());

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

  getAllMaterial(data: any){
    return this.http.get(this.url + '/api/material/all?term='+ data.term, this.generateHeader());
  }
  getMaterialById(data: any){
    return this.http.get(this.url + '/api/material/getById/' + data.id, this.generateHeader());
  }
  getEquipmentById(data: any){
    return this.http.get(this.url + '/api/equipment/getById/' + data.id, this.generateHeader());
  }

  getEquipmentByProduct(data: any){
    return this.http.get(this.url + '/api/requieredEquipment/allByProduct/' + data.id, this.generateHeader());
  }

  getAllPatient(){
    return this.http.get(this.url + '/api/user/allPatients', this.generateHeader());
  }


  getAllProducts(data: any){
    return this.http.get(this.url + '/api/product/all?term=' + data.term, this.generateHeader());
  }
  getSunglasses(data: any){
    return this.http.get(this.url + '/api/product/sunglasses?term=' + data.term, this.generateHeader());
  }
  getFrames(data: any){
    return this.http.get(this.url + '/api/product/frames?term=' + data.term, this.generateHeader());
  }
  getSoftLens(data: any){
    return this.http.get(this.url + '/api/product/soft?term=' + data.term, this.generateHeader());
  }
  getHardLens(data: any){
    return this.http.get(this.url + '/api/product/hard?term=' + data.term, this.generateHeader());
  }
  getAllWorkingHourByOptician(data: any){
    return this.http.get(this.url + '/api/workingHour/getBy/' + data.id, this.generateHeader());
  }

  createWorkingHour(data: any){
    return this.http.post(this.url + '/api/workingHour/add', data)
  }

  createEquipmentAppointment(data: any){
    return this.http.post(this.url + '/api/equipmentAppointment/add', data)
  }

  addRequiredEquipment(data: any){
    return this.http.post(this.url + '/api/requieredEquipment/add/' + data.productId + '/' + data.equipmentId, data)
  }

  getAllEquipment(data: any){
    return this.http.get(this.url + '/api/equipment/all?term=' + data.term, this.generateHeader());
  }

  getAllUsers(data: any){
    return this.http.get(this.url + '/api/user/all?term=' + data.term, this.generateHeader());
  }
  getAllOpticians(data: any){
    return this.http.get(this.url + '/api/user/all?term=' + data.term, this.generateHeader());
  }
  getAllSellers(data: any){
    return this.http.get(this.url + '/api/user/all?term=' + data.term, this.generateHeader());
  }
  getMaterailByApp(data: any){
    return this.http.get(this.url + '/api/requiredMaterial/allByApp/' + data.id, this.generateHeader());
  }
  addRequiredMaterial(data: any){
    return this.http.post(this.url + '/api/requiredMaterial/add', data, this.generateHeader());
  }
  getProductById(data: any){
    return this.http.get(this.url + '/api/product/getById/' + data.id, this.generateHeader());
  }

  getWorkHoureById(data: any){
    return this.http.get(this.url + '/api/workingHour/getById/' + data.id, this.generateHeader());
  }
  createOpticianAppointment(data: any){
    return this.http.post(this.url + '/api/opticianAppointment/add', data);

  }

  findFreeAppointments(data: any){
    return this.http.get(this.url + '/api/opticianAppointment/getFreeApointments/' + data.date + '/' +  data.productId, this.generateHeader())
  }

  predictTime(data: any){
    return this.http.get(this.url + '/api/opticianAppointment/predictTime/', data)
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

  getAllPriceList(data: any){
    return this.http.get(this.url + '/api/priceList/all?term=' + data.term, this.generateHeader());
  }

  editMaterial(data: any){
    return this.http.put(this.url + '/api/material/edit/' + data.id, data, this.generateHeader());
  }
  addComment(data: any){
    return this.http.put(this.url + '/api/opticianAppointment/addComment/' + data.id + '/' + data.comment, data, this.generateHeader());
  }

  finish(data: any){
    return this.http.put(this.url + '/api/opticianAppointment/finish/' + data.id, data, this.generateHeader());
  }
  pickUp(data: any){
    return this.http.put(this.url + '/api/opticianAppointment/pickUp/' + data.id, data, this.generateHeader());
  }
  notify(){
    return this.http.get(this.url + '/api/email/sendEmail', this.generateHeader());
  }
  getAllFinished(data: any){
    return this.http.get(this.url + '/api/opticianAppointment/getAllFinished?term=' + data.term, this.generateHeader())
  }
  changeQuantity(data: any){
    return this.http.put(this.url + '/api/material/changeQuantity/' + data.id + '/' + data.quatity, data, this.generateHeader());
  }

  editProduct(data: any){
    return this.http.put(this.url + '/api/product/' + data.id, data, this.generateHeader());
  }

  editWorkHoure(data: any){
    return this.http.put(this.url + '/api/workingHour/' + data.id, data, this.generateHeader());
  }

  editEquipment(data: any){
    return this.http.put(this.url + '/api/equipment/edit/' + data.id, data, this.generateHeader());
  }

  editWorkHour(data: any){
    return this.http.put(this.url + '/api/workingHour/' + data.id, data, this.generateHeader());
  }

  deleteMaterial(data: any){
    return this.http.delete(this.url + '/api/material/' + data.id, this.generateHeader());
  }

  deleteProduct(data: any){
    return this.http.delete(this.url + '/api/product/' + data.id, this.generateHeader());
  }
  deleteUser(data: any){
    return this.http.delete(this.url + '/api/user/' + data.id, this.generateHeader());
  }

  deleteEquipment(data: any){
    return this.http.delete(this.url + '/api/equipment/' + data.id, this.generateHeader());
  }

  deleteWorkHour(data: any){
    return this.http.delete(this.url + '/api/workingHour/delete/' + data.id, this.generateHeader());
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

