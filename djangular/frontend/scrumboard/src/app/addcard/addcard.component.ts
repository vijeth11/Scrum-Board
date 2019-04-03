import { Component, OnInit,Inject } from '@angular/core';
import {card} from '../shared/cards';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ListserviceService} from '../service/listservice.service';
import {List} from '../shared/lists';

@Component({
  selector: 'app-addcard',
  templateUrl: './addcard.component.html',
  styleUrls: ['./addcard.component.css']
})
export class AddcardComponent implements OnInit {

  Lists:List[];
  selectedValue3:String="hello";
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: card, public dialogRef: MatDialogRef<AddcardComponent>,private listService:ListserviceService) { }

  ngOnInit() {
    this.listService.getLists().subscribe((result)=>{
      this.Lists=result;
      console.log(result);
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onYesClick(title:any,description:any,story:any,business:any):void{
    this.data.title=title;
    this.data.description=description;
    this.data.story_points=story;
    this.data.business_value=business;
    console.log({"title":title,"description":description,"story":story,"business":business})
    this.dialogRef.close(this.data);
  }

  selectionclicked(list){
    console.log(list);
    this.data.list=list.id;
  }
}
