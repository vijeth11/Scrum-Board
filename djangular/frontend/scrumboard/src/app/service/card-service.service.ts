import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import {card} from '../shared/cards';
@Injectable({
  providedIn: 'root'
})
export class CardServiceService {

  constructor() { }

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



  getCards():Observable<card[]>{
    return of(this.cards).pipe(delay(100));
  }

  getCardsbyId(id:number):Observable<card[]>{
    return of(this.cards.filter((card)=>(card.id==id))).pipe(delay(100));
  }
}
