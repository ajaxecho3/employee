import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeGetComponent } from './employee-get/employee-get.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';

const routes: Routes = [
  {
    path: 'employee/create',
    component: EmployeeAddComponent
  },
  {
    path: 'edit/:id',
    component: EmployeeEditComponent
  },
  {
    path: 'employees',
    component: EmployeeGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
