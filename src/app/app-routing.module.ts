import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListingComponent } from './components/employee-listing/employee-listing.component';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
const routes: Routes = [{
  path: "employees",
  component: EmployeeListingComponent
},
{
  path: "employees/add",
  component: EmployeeAddComponent
},
{
  path: "employees/:id/edit",
  component: EmployeeEditComponent
},
{
  path: '**',
  redirectTo: "employees",
  pathMatch: 'full'
},
{
  path: '',
  redirectTo: "employees",
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
