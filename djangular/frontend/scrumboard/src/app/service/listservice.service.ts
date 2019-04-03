import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map,delay,catchError } from 'rxjs/operators';
import {List}  from '../shared/lists';
import { resolve } from 'url';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ProcesshttpmsgService} from './processhttpmessage.service';
@Injectable({
  providedIn: 'root'
})
export class ListserviceService {


  constructor(private http:HttpClient,private posthttpmessage: ProcesshttpmsgService) { }

   getLists():Observable<List[]> {
     return this.http.get<List[]>('http://127.0.0.1:8000/scrumboards/lists/').pipe(catchError(this.posthttpmessage.handleError))
     //return of([{id:1,name:'Todo'},{id:2,name:'Starting'},{id:3,name:'Finished'}]).pipe(delay(100));
   }
}
