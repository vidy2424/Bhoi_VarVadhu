
import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';

import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/sevices/login.service';
import { HelperService } from 'src/app/Helper/helper.service';
import { tokenName } from '@angular/compiler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Spring Boot + Angular 8 CRUD Example';

 
  loginUserInfo = [];

  constructor(
    private helperService: HelperService,
    private loginService: LoginService,

    private router: Router
  ) { }

  isLoggedin: boolean;
  ngOnInit() {
    this.isLoggedin = this.helperService.token ? true : false;
    this.userinfo(tokenName);
  }

  logOut(): void {
    const data = {};
    this.loginService.logoutUser(data)
      .subscribe(result => {
        console.log(result);
        this.router.navigate(['/']);


      }, err => {
        alert(err);
      });
  }

  userinfo(token) {
    this.loginService.getuserInfo()
      .subscribe(result => {
        this.helperService.userData = result;
        this.loginUserInfo = result;
      }, err => {
        // alert(err);
      });
  }
 


}
