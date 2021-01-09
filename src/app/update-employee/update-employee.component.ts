import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee: Employee;
  uid: string;

  constructor(private route: ActivatedRoute, private router: Router,
    private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employee = new Employee();

    this.uid = this.route.snapshot.params['uid'];

    this.employeeService.getEmployee(this.uid)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }, error => console.log(error));
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.uid, this.employee)
      .subscribe(data => {
        console.log(data);
        this.employee = new Employee();
        this.list();
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['employees']);
  }
}
