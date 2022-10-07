import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const baseUrl =environment.appRoot;

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${localStorage.getItem('token')}`
});
const requestOptions = { headers: headers };

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private handleError: HandleError;
  constructor(private http: HttpClient,httpErrorHandler: HttpErrorHandler) {  this.handleError = httpErrorHandler.createHandleError('StockService');}

  emptystock(companyCode: any):Observable<any> {
    return this.http.get((baseUrl+'/stock/empty/'+companyCode),requestOptions) .pipe(
      catchError(this.handleError())
    );
  }

  savestocks(data:any):Observable<any>
  {
    return this.http.post((baseUrl+'/stock/add'),data,requestOptions) .pipe(
      catchError(this.handleError('data', data))
    );
  }

  deletestock(id: any):Observable<any> {
    return this.http.get((baseUrl+'/stock/delete/'+id),requestOptions) .pipe(
      catchError(this.handleError())
    );
  }







}
