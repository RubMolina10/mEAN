import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';



@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  URL_API = ' http://localhost:4000/api/employees'
  selectEmployee: Employee = {
    nNum_Emp:'',
    sNombres:'',
    sAppellidos:'',
    sPuesto:'',
    nSalario:0
  };
  employees :Employee[] | undefined;
  
  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get<Employee[]>(this.URL_API);
  }
  createEmployee(employee:Employee){
    
   //   return this.http.post(this.URL_API,employee);
    return this.http.get<Employee[]>(this.URL_API);
  }
}
