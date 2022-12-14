import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login.model';
import { Register } from '../models/register.model';

import { environment } from '../../environments/environment';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${localStorage.getItem('token')}`
});
const httpOptions = { headers: headers };

const baseUrl = environment.appRoot;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private handleError: HandleError;
  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('AuthService');
  }

  register(data: Register): Observable<Register> {

    return this.http
      .post(baseUrl + '/company/adduser', data, httpOptions)
      .pipe(catchError(this.handleError('register', data)));
  }

  authenticate(user: Login): Observable<any> {

    return this.http
      .post(baseUrl + '/company/Authenticate', user, httpOptions)
      .pipe();
  }
}
