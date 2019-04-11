import { Component, OnInit, Inject } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../service/login.service';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  SignIn:boolean;
  Register:boolean
  constructor(private router: Router,private loginservice:LoginService,@Inject(SESSION_STORAGE) private storage: StorageService) { }

  ngOnInit() {
    this.SignIn=true;
    this.Register=false;
  }
 
  login(username:string,password:string)
  {
    var user:any={"username":username,"password":password};
    this.loginservice.login(user).subscribe((result)=>{
      this.storage.set("userid",result["id"]);
      this.storage.set("username",result["username"]);
      this.loginservice.LoginStatus.next("Logout");
     this.router.navigate(['scrumboard']);
    },
    (error)=>{
      alert(error);
    });
     
  }
  register(username:string,password:string,confirmpassword:string)
  {
    if(password==confirmpassword)
    {
      this.Register=false;
      this.router.navigate(['login']);
    }
  }
  

}
