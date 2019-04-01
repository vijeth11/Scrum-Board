import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  Loginstatus:String = "Login";
  constructor(private route:Router) { }


  ngOnInit() {
    this.Loginstatus="Login";
  }

  changeStatus()
  {
    this.Loginstatus="Logout";
    this.route.navigate(['scrumboard']);
   }
}
