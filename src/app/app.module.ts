import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { EmployeeListingComponent } from './components/employee-listing/employee-listing.component';
import {MatButtonModule, MatTableModule, MatFormFieldModule, MatInputModule, MatCardModule} from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {SharedDataService} from './services/shared-data.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeAddComponent,
    EmployeeEditComponent,
    EmployeeListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule, MatTableModule, MatFormFieldModule, MatInputModule, MatCardModule, MatSnackBarModule
  ],
  providers: [SharedDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
