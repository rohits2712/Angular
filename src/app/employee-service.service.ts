import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {IEmployee} from './employee';
import { throwError,Observable } from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private _url:string = "/assets/employees.json";
  constructor(private http:HttpClient) { }
  getEmployees(): Observable<IEmployee[]>  {
      return this.http.get<IEmployee[]>(this._url)
            .pipe(catchError(this.errorHandler));

  }
  errorHandler(error:HttpErrorResponse){
    return Observable.throw(error.message||'Server error');
  }
}
