import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-menager-home-page',
  templateUrl: './menager-home-page.component.html',
  styleUrls: ['./menager-home-page.component.css']
})
export class MenagerHomePageComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

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
  constructor(private formBuilder: FormBuilder, private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  users(){
    this.router.navigate(['/users']);

  }
  products(){
    this.router.navigate(['/products']);

  }
  materials(){
    this.router.navigate(['/material-view']);

  }
  equipment(){
    this.router.navigate(['/equipment-view']);

  }

}
