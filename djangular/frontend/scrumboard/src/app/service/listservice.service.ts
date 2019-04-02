import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import {List}  from '../shared/lists';
import { resolve } from 'url';
@Injectable({
  providedIn: 'root'
})
export class ListserviceService {


  constructor() { }

   getLists():Observable<List[]> {
     return of([{id:1,name:'Todo'},{id:2,name:'Starting'},{id:3,name:'Finished'}]).pipe(delay(100));
   }
}
