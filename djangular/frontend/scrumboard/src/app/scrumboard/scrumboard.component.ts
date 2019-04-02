import { Component, OnInit } from '@angular/core';
import {ListserviceService} from '../service/listservice.service';
import {CardServiceService} from '../service/card-service.service';
import {List} from '../shared/lists';
import {card} from '../shared/cards';
@Component({
  selector: 'app-scrumboard',
  templateUrl: './scrumboard.component.html',
  styleUrls: ['./scrumboard.component.css']
})
export class ScrumboardComponent implements OnInit {

  selectedValue1:String="TODO";
  selectedValue2:String="Started";
  selectedValue3:String="Finished";
  Lists:List[];
  cards:card[];
  constructor(private listService:ListserviceService,private cardservice:CardServiceService) {

   }

  ngOnInit() {
    this.listService.getLists().subscribe((result)=>{
      this.Lists=result;
      console.log(result);
    })
    this.cardservice.getCards().subscribe((result)=>{
      this.cards=result;
      console.log(result);
    })
  }

  selectionclicked(list:List){
    console.log(list);
  }
}
