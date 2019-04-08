import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoginService } from '../service/login.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  Loginstatus:String = "Login";
  constructor(private route:Router,private login:LoginService) { }


  ngOnInit() {
    this.Loginstatus="Login";
    this.login.LoginStatus.subscribe(value=>{
      this.Loginstatus=value;
    });
  }

  changeStatus()
  {
    if(this.Loginstatus=="Login"){
    this.login.login();
    this.route.navigate(['scrumboard']);
    }
    else{
      this.Loginstatus="Login";
      this.route.navigate(['login']);
    }
   }
}
