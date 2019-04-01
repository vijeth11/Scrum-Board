import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrumboard',
  templateUrl: './scrumboard.component.html',
  styleUrls: ['./scrumboard.component.css']
})
export class ScrumboardComponent implements OnInit {

  selectedValue1:String="TODO";
  selectedValue2:String="Started";
  selectedValue3:String="Finished";
  Lists:any=["TODO","Started","Finished"]
  Titles:any=[" This is the expansion 1 title","This is the expansion 2 title"]
  constructor() { }

  ngOnInit() {
  }


}
