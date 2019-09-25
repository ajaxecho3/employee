import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  uri = 'http://localhost:4000/employees';
  constructor(private http: HttpClient) { }

  addEmployee(EmployeeName, EmployeePosition, EmployeeAge) {
    const obj = {
      EmployeeName,
      EmployeePosition,
      EmployeeAge
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
}
