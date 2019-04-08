import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public LoginStatus:Subject<String> =new Subject();
  constructor() { }

  login()
  {
    this.LoginStatus.next("Logout");
  }
}
