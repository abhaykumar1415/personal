import { Component, OnInit } from '@angular/core';
import {SharedDataService} from '../../services/shared-data.service';
import {MatTableDataSource} from '@angular/material';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-listing',
  templateUrl: './employee-listing.component.html',
  styleUrls: ['./employee-listing.component.scss'],
  providers: [SharedDataService]
})
export class EmployeeListingComponent implements OnInit {
  private displayedColumns = ['id', 'name', 'phone', 'city', 'address1', 'address2', 'postalCode', 'edit'];
  private dataSource: any;
  private data: any;
  constructor(private sharedData: SharedDataService,  private router: Router) {
    this.data = sharedData.getdata();
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngOnInit() {
    /**
     * Custom filters
     */
    this.dataSource.filterPredicate = (data,filter) => ( data.name.toLowerCase().indexOf(filter) != -1 || data.address.city.toLowerCase().indexOf(filter) != -1 );
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  
  }
  /**
   * Function to navigate to employee edit page
   */
  navigateToEdit(id) {
    this.router.navigate(['/employees/' + id +'/edit']);
  }

  /**
   * Function to navigate to employee add page
   */
  navigateToAddEmp() {
    this.router.navigate(['/employees/add']);
  }
}
