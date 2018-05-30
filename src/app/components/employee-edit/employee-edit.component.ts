import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SharedDataService} from '../../services/shared-data.service';
import {MatSnackBar} from '@angular/material';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {
  private emp: any = {};
  constructor(private sharedData: SharedDataService, private snackBar: MatSnackBar, private router: Router, private route:ActivatedRoute) {
    let id = this.route.snapshot.params['id'];
    let data = this.sharedData.getdata();
    this.emp = data.filter(record => record.id === id);
    this.emp.length ? this.emp = this.emp[0] : this.router.navigate(['/employees']);
  }

  ngOnInit() {
  }

  /** 
   * Function to update data.
  */
  update() {
    let validName = !this.emp.name || this.emp.name.length < 4 ? false: true;
    let validPhone = !this.emp.phone || this.emp.phone.length === 0 ? false: true;
    if ( !(validName&&validPhone) ) {
      this.openSnackBar('Name and phone are rquired !');
    } else {
      this.sharedData.update(this.emp);
      this.router.navigate(['/employees']);
    }
  }

  /**
   * Function to show snackbar
   * @param message
   */
  openSnackBar(message) {
    this.snackBar.open(message, 'Please retry',{
      duration: 2000,
    });
  }

  /**
   * Function to navigate back to listing page.
   */
  back() {
    this.router.navigate(['/employees']);
  }
}
