import { Component, OnInit } from '@angular/core';
import {SharedDataService} from '../../services/shared-data.service';
import {MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-employee-listing',
  templateUrl: './employee-listing.component.html',
  styleUrls: ['./employee-listing.component.scss'],
  providers: [SharedDataService]
})
export class EmployeeListingComponent implements OnInit {
  private displayedColumns = ['id', 'name', 'phone', 'city', 'address1', 'address2', 'postalCode'];
  private dataSource: any;
  private data: any;
  constructor(private sharedData: SharedDataService) {
    this.data = sharedData.getdata();
    this.dataSource = new MatTableDataSource(this.data);
    console.log('Data :', this.data);
  }

  ngOnInit() {
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
