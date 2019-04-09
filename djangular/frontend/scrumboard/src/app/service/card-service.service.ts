import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay,catchError,map } from 'rxjs/operators';
import {card} from '../shared/cards';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ProcesshttpmsgService} from './processhttpmessage.service';
@Injectable({
  providedIn: 'root'
})
export class CardServiceService {

  constructor( private http:HttpClient, private processhttpmsg:ProcesshttpmsgService) { }

   cards:card[]=[
     {
      id:1,
      title:"text1",
      description: "test1",
      story_points: 2,
      business_value: 3,
      list: 1

     },
     {
      id:2,
      title:"text2",
      description: "test2",
      story_points: 4,
      business_value: 6,
      list: 1

     },
     {
      id:3,
      title:"text3",
      description: "test3",
      story_points: 2,
      business_value: 3,
      list: 2

     },
     {
      id:4,
      title:"text4",
      description: "test4",
      story_points: 2,
      business_value: 3,
      list: 2

     },
     {
      id:5,
      title:"text5",
      description: "test5",
      story_points: 3,
      business_value: 1,
      list: 3

     },
     {
      id:6,
      title:"text6",
      description: "test6",
      story_points: 2,
      business_value: 3,
      list: 3

     }
  ]



  getCards(id:number):Observable<card[]>{
    console.log(id);
    return this.http.get<card[]>('http://127.0.0.1:8000/scrumboards/cards/?user='+id.toString()).pipe(catchError(this.processhttpmsg.handleError));
  }

  getCardsbyId(id:number):Observable<card[]>{
    return of(this.cards.filter((card)=>(card.id==id))).pipe(delay(100));
  }

  addNewCard(Newcard:any):Observable<card>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<card>('http://127.0.0.1:8000/scrumboards/cards/',Newcard,httpOptions).pipe(catchError(this.processhttpmsg.handleError))
  }

  deleteCard(id:number):Observable<any>{
    return this.http.delete<any>('http://127.0.0.1:8000/scrumboards/cards/'+id+'/').pipe(catchError(this.processhttpmsg.handleError))
  }

  updateCard(id:number,card:any):Observable<card>{
    const httpOptions={
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    };
    return this.http.put<card>('http://127.0.0.1:8000/scrumboards/cards/'+id+'/',card,httpOptions).pipe(catchError(this.processhttpmsg.handleError))
  }
}
