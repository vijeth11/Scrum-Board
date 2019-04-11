import { Component, OnInit, Inject } from '@angular/core';
import {ListserviceService} from '../service/listservice.service';
import {CardServiceService} from '../service/card-service.service';
import {List} from '../shared/lists';
import {card} from '../shared/cards';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AddcardComponent } from '../addcard/addcard.component';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
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
  constructor(private listService:ListserviceService,private cardservice:CardServiceService, private dialog:MatDialog,@Inject(SESSION_STORAGE) private storage: StorageService) {

   }

  ngOnInit() {
    this.listService.getLists().subscribe((result)=>{
      this.Lists=result;
      
    },(error)=>{
      alert(error);
    })
    this.cardservice.getCards(this.storage.get("userid")).subscribe((result)=>{
      this.cards=result;
      
    },(error)=>{
      alert(error);
    })
  }

  selectionclicked(list:List,id:number){
    this.updateCard(id,null,list);
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(AddcardComponent, {
      width: '450px',
      data: {title:"",description: "", story_points: 0,business_value:0,list:0}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.cardservice.addNewCard(result).subscribe((result)=>{           
            this.updateCardsList();
      },(error)=>{
        alert(error);
      });

    });
  }

   updateCardsList(){
    this.cardservice.getCards(this.storage.get("userid")).subscribe((result)=>{
      this.cards=result;
    });
  }

  deleteCard(id:number,tempcard:card=null){
    this.cardservice.deleteCard(id).subscribe((result)=>{
     
      if(tempcard!=null)
      {
      this.cardservice.addNewCard(tempcard).subscribe((result)=>{
        
        this.updateCardsList();
       },(error)=>{
           alert(error);
       });
      }
      else{
        this.updateCardsList();
      }
    },(error)=>{
      alert(error);
    });
    
  }

  updateCard(id:number,card:any,list:any){
    
    var tempcard:card=null;
    for( var data of this.cards){
      if(data.id==id)
      tempcard=data;
    }

    if(tempcard!=null && tempcard.list==list && card!=null){
      card["user"]=this.storage.get("userid");
    this.cardservice.updateCard(id,card).subscribe((result)=>{
      
      this.updateCardsList();
    },(error)=>{
      alert(error);
    });
  }
  else if(tempcard!=null && tempcard.list!=list.id)
   {
    tempcard.list=list.id;
    this.deleteCard(id,tempcard);
   }
  }
}
