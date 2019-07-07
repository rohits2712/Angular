import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor() { }
  getEmployees(){
      return [
        {"id":1, "firstname":"rohit", "surname":"sharma"},
        {"id":2, "firstname":"rishi", "surname":"sharma"},
        {"id":3, "firstname":"rohit", "surname":"sharma"}
      ]

  }
}
