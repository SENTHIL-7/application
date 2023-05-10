import { Injectable } from '@angular/core';
import { HttpRoutingService } from './http-routing.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpRoutingService) { }
  public getRole() {
    return this.http.getMethod('getRole')
  }
  public getDesignation() {
    return this.http.getMethod('getDesignation')
  }
  public createEmployee(data: any) {
    return this.http.postMethod('createEmployee', data)
  }
  public getEmployees() {
    return this.http.getMethod('getEmployees')
  }
  public deleteEmployee(data: any) {
    return this.http.postMethod('deleteEmployee', data)
  }
  public getEmployee(data: any) {
    return this.http.postMethod('getEmployee', data)
  }
  public updateEmployee(data: any) {
    return this.http.postMethod('updateEmployee', data)
  }
  public checkEmail(email: string, id: number | undefined) {
    const data = { email: email, id: id ? id : null };
    return this.http.postMethod('checkEmail', data)
  }
}
