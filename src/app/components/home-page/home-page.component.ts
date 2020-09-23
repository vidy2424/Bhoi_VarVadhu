import { tokenName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/Helper/helper.service';
import { LoginService } from 'src/app/sevices/login.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
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
        this. loginUserInfo = result;
    }, err => {
       // alert(err);
    });
}


}

