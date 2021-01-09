import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  private baseUrl = 'http://localhost:8080/employees/';

  constructor(private http: HttpClient) { }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getEmployee(uid: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${uid}`);
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  updateEmployee(uid: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${uid}`, value);
  }

  deleteEmployee(uid: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${uid}`, { responseType: 'text' });
  }
}
