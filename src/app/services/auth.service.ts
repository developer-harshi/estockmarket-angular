import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login.model';
import { Register } from '../models/register.model';

import { environment } from '../../environments/environment';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const baseUrl =environment.appRoot;

@Injectable({
    providedIn: 'root'
})

export class AuthService {
  private handleError: HandleError;
  constructor(private http: HttpClient,httpErrorHandler: HttpErrorHandler) {

    this.handleError = httpErrorHandler.createHandleError('AuthService');
   }

   authUser(user: Login):Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post((baseUrl+'/admin/login'),user,httpOptions) .pipe(
      catchError(this.handleError('register', user))
    );
  }

  register(data:Register):Observable<Register>
{
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  return this.http.post((baseUrl+'/usersignup'),data,httpOptions) .pipe(
    catchError(this.handleError('register', data))
  );
}

authUserrolebased(user: Login):Observable<any> {
  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  return this.http.post((baseUrl+'/Authenticate'),user,httpOptions) .pipe() ;
}


}
