   import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit{

  constructor(public employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees();
  
  }

  getEmployees(){
      this.employeeService.getEmployees().subscribe(
      res =>{
        this.employeeService.employees = res;
      },
      err =>console.error(err)
    );   
  }
  addEmploye(form : NgForm){
    this.employeeService.createEmployee(form.value).subscribe(
     res=> {
      this.getEmployees();
     },
     err=> console.error(err)
    ); 
  }
}
