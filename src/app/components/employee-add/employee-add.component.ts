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
    /**
     * Initializing emplty object in emp object which will be used in the template.
     */
    this.emp.address = {};
  }

  ngOnInit() {
  }

  /** 
   * Function to save data via service.
  */
  saveDate() {
    let validName = !this.emp.name || this.emp.name.length < 4 ? false: true;
    let validPhone = !this.emp.phone || this.emp.phone.length === 0 ? false: true;
    if ( !(validName&&validPhone) ) {
      this.openSnackBar('Name and phone are rquired !');
    } else {
      this.emp.id=  Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);
      this.sharedData.addData(this.emp);
      this.router.navigate(['/employees']);
    }
  }

  /**
   * Function for snackbar to show some message.
   * @param message
   */
  openSnackBar(message) {
    this.snackBar.open(message, 'Please retry',{
      duration: 2000,
    });
  }
  reset() {
    this.emp = {};
    this.emp.address = {};
  }
}
