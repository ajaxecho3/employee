import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private ms: EmployeesService) {
    this.createForm();
  }
  emPost: any = ['Developer', 'Manager', 'Associate'];

  createForm() {
    this.angForm = this.fb.group({
      EmployeeName: ['', Validators.required],
      EmployeePosition: ['', Validators.required],
      EmployeeAge: ['', Validators.required]
    });
  }

  addEmployee(EmployeeName, EmployeePosition, EmployeeAge) {
    this.ms.addEmployee(EmployeeName, EmployeePosition, EmployeeAge);
  }

  ngOnInit() {
  }

}
