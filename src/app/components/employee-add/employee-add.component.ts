import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';
import {MatSnackBar} from '@angular/material';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {
  private emp: any = {};
  constructor(private sharedData: SharedDataService, private snackBar: MatSnackBar, private router: Router) {
    this.emp.address = {};
  }

  ngOnInit() {
  }

  saveDate() {
    console.log('Data :', this.emp);
    let validName = !this.emp.name || this.emp.name.length < 4 ? false: true;
    let validPhone = !this.emp.phone || this.emp.phone.length === 0 ? false: true;
    if ( !(validName&&validPhone) ) {
      this.openSnackBar('Name and phone are rquired !');
    } else {
      console.log('Save data');
      this.emp.id=  Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
      this.sharedData.addData(this.emp);
      this.router.navigate(['/employees']);
    }
  }
  openSnackBar(message) {
    this.snackBar.open(message, 'Please retry',{
      duration: 2000,
    });
  }
}
