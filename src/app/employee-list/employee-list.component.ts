import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Observable<Employee[]>;

  boolVar: boolean = false

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.employeeService.getEmployeesList();
  }

  deleteEmployee(uid: string) {
    this.boolVar = confirm("Are You Sure to Delete ?");
    if (this.boolVar === true) {
      this.employeeService.deleteEmployee(uid)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    }
  }

  employeeDetails(uid: string) {
    this.router.navigate(['details', uid]);
  }

  updateEmployee(uid: string) {
    this.router.navigate(['update', uid]);
  }

}
