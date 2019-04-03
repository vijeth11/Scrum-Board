import { Component, OnInit } from '@angular/core';
import {ListserviceService} from '../service/listservice.service';
import {CardServiceService} from '../service/card-service.service';
import {List} from '../shared/lists';
import {card} from '../shared/cards';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AddcardComponent } from '../addcard/addcard.component';
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
  constructor(private listService:ListserviceService,private cardservice:CardServiceService, private dialog:MatDialog) {

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


  openDialog(): void {
    const dialogRef = this.dialog.open(AddcardComponent, {
      width: '450px',
      data: {title:"",description: "", story_points: 0,business_value:0,list:0}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.cardservice.addNewCard(result).subscribe((result)=>{
            console.log(result);
            this.updateCardsList();
      });

    });
  }

   updateCardsList(){
    this.cardservice.getCards().subscribe((result)=>{
      this.cards=result;
      console.log(result);
    });
  }

  deleteCard(id:number){
    this.cardservice.deleteCard(id).subscribe((result)=>{
      console.log(result);
      this.updateCardsList();
    });
  }
}
