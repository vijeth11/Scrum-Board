import { Component, OnInit,Inject } from '@angular/core';
import {Router} from '@angular/router';
import { LoginService } from '../service/login.service';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  Loginstatus:String = "Login";
  constructor(private route:Router,private login:LoginService,@Inject(SESSION_STORAGE) private storage: StorageService) { }


  ngOnInit() {
    this.Loginstatus="Login";
    this.login.LoginStatus.subscribe(value=>{
      this.Loginstatus=value;
    });
  }

  changeStatus()
  {
    if(this.Loginstatus=="Login"){
    }
    else{
      this.storage.remove("username");
      this.storage.remove("userid");
      this.Loginstatus="Login";
      this.route.navigate(['login']);
    }
   }
}
