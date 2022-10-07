import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

const baseUrl =environment.appRoot;

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${localStorage.getItem('token')}`
});
const requestOptions = { headers: headers };

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private handleError: HandleError;
  constructor(private http: HttpClient,httpErrorHandler: HttpErrorHandler) {  this.handleError = httpErrorHandler.createHandleError('StockService');}

  savecompany(data:any):Observable<any>
  {
    return this.http.post((baseUrl+'/company/register'),data,requestOptions) .pipe(
      catchError(this.handleError('data', data))
    );
  }

  getcompany(companyCode: any):Observable<any> {
    return this.http.get((baseUrl+'/company/getcompany/'+companyCode),requestOptions) .pipe(
      catchError(this.handleError())
    );
  }

  deletecompany(companyCode: any):Observable<any> {
    return this.http.get((baseUrl+'/company/delete/'+companyCode),requestOptions) .pipe(
      catchError(this.handleError())
    );
  }

}
