import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { MatSidenav } from '@angular/material/sidenav';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RegistrationComponent } from '../registration/registration.component';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import {Location} from '@angular/common';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  data: any;
  selectedUserType: any;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
  form: any;
  user:any;
  users:any;
  displayedColumns: string[] = ['FirstName', 'LastName','Gender', 'Email', 'Phone', 'UserType', 'Edit', 'Delete'];
  usertId: any
  selectedRow: any;

  constructor(private location: Location,private formBuilder: FormBuilder, private apiService: ApiService, private router: Router, private dialog: MatDialog) { 
    this.user = this.apiService.getUserFromLocalstorage();

    this.form = this.formBuilder.group({
      search: [''] 
    });
  }

  ngOnInit(): void {

    let search = this.form.get('search')?.value ? this.form.get('search')?.value : ''


    this.apiService.getAllUsers({
      term:  search
    }).subscribe((response : any) => {
      console.log('aa');
      console.log(response);
      this.users = response  
    });
  }


  linkCLick(id: any){
    this.openAlertDialogEdit(id);
  }

  link2CLick(id: any){
    this.apiService.deleteUser({id: id}).subscribe((response) => {
      this.ngOnInit();
    });
  }


  onSubmit(){
    let search = this.form.get('search')?.value ? this.form.get('search')?.value : ''


  this.apiService.getAllUsers({
    term:  search
  }).subscribe((response : any) => {
    console.log('aa');
    console.log(response);
    this.users = response  
  });
  }

  new(){
    this.openAlertDialog();
    this.ngOnInit();

  }

  back(){
    this.location.back()
   } 
  openAlertDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
  
    dialogConfig.data = {
        id: 1,
        title: 'New'
    };
  
    const dialogRef = this.dialog.open(RegistrationComponent,{
      data:{
        message: 'Add user',
        buttonText: {
          cancel: 'DONE'
        }
      },
    });
    dialogRef.afterClosed().subscribe((res) => {
      // Trigger After Dialog Closed 
      switch (res.event) {
        case "yes-option":
          this.data = res.data;

          this.apiService.userRegistration({
            email: this.data.email,
            password: this.data.password,
            posswordConformation : this.data.password,
            firstName: this.data.firstName,
            lastName: this.data.lastName,
            userType: this.data.selectedUserType,
            gender: this.data.selectedType,
            phone: this.data.phone,
            birthDate: this.data.birthDate,
          }).subscribe((response: any) => {
              this.ngOnInit();
          })
          break;
        case "no-option":
          console.log('No Clicked');
          break;
        default:
          break;
      }
    });
  }

  openAlertDialogEdit(id: any) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
  
    dialogConfig.data = {
        id: 1,
        title: 'New'
    };
  
    const dialogRef = this.dialog.open(EditProfileComponent,{
      data:{
        message: 'Edit profile',
        id: id,
        buttonText: {
          cancel: 'DONE'
        }
      },
    });
    dialogRef.afterClosed().subscribe((res) => {
      // Trigger After Dialog Closed 
      switch (res.event) {
        case "yes-option":
          this.data = res.data;

          this.apiService.editProfile({
            id: id,
            email: this.data.email,
            firstName: this.data.firstName,
            lastName: this.data.lastName,
            phone: this.data.phone,
            birthDate: this.data.birthDate,
          }).subscribe((response: any) => {
            this.ngOnInit();
          })
          break;
        case "no-option":
          console.log('No Clicked');
          break;
        default:
          break;
      }
    });
  }

 
}
