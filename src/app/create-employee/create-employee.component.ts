import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();

  submitted = false;

  isEmpty: boolean = false;
  inputValue1: string = "";
  inputValue2: string = "";
  inputValue3: string = "";


  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  isAnyValue(value1: string, value2: string, value3: string) {
    this.inputValue1 = value1;
    this.inputValue2 = value2;
    this.inputValue3 = value3;
  }

  check(): boolean {
    if (this.inputValue1 != "" && this.inputValue2 != "" && this.inputValue3 != "") {
      return false
    }
    else
      return true;
  }


  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save() {
    this.employeeService
      .createEmployee(this.employee).subscribe((data) => {
        console.log(data);
        this.employee = new Employee();
      },
        (error) => console.log(error));

    this.submitted = true;
  }
}
