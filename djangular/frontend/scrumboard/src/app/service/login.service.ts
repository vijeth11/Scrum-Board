import { Injectable } from '@angular/core';
import { Observable, of,Subject } from 'rxjs';
import { delay,catchError,map } from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ProcesshttpmsgService} from './processhttpmessage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public LoginStatus:Subject<String> =new Subject();
  constructor(private http:HttpClient, private processhttpmsg:ProcesshttpmsgService) { }

  login(user:any):Observable<any>
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<any>('http://127.0.0.1:8000/scrumboards/login/',user,httpOptions).pipe(catchError(this.processhttpmsg.handleError));
  }
}
