import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/sevices/login.service';
import { HelperService } from 'src/app/Helper/helper.service';
import { tokenName } from '@angular/compiler';
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loginUserInfo = [];
  isMale = false;
  isFemale = false;
  constructor(
    private helperService: HelperService,
    private loginService: LoginService,
 
    private router: Router
  ) { }

  isLoggedin: boolean;
  ngOnInit() {
    this.isMale = this.helperService.userData['gender'] === 'male' ? true : false;
    this.isFemale = this.helperService.userData['gender'] === 'isFemale' ? true : false;

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
      // window.location.reload();

  }

  userinfo(token) {
    this.loginService.getuserInfo()
    .subscribe(result => {
        this.helperService.userData = result;
        this.isMale = result['gender'] === 'male' ? true : false;
        this.isFemale = result['gender'] === 'female' ? true : false;
        this. loginUserInfo = result;

    }, err => {
        //alert(err);
    });
}

}
