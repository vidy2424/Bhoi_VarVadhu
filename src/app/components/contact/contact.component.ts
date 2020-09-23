import { tokenName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelperService } from 'src/app/Helper/helper.service';
import { LoginService } from 'src/app/sevices/login.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  isAdmin = false;
  loginUserInfo: any = [];

  constructor(
    private helperService: HelperService,
    private loginService: LoginService,
    private route: ActivatedRoute
  ) { }
  isLoggedin: boolean;

  ngOnInit() {
    this.isLoggedin = this.helperService.token ? true : false;
    this.userinfo(tokenName);
 

  }

  userinfo(token) {
    this.loginService.getuserInfo()
      .subscribe(result => {
        this.helperService.userData = result;
        this.isAdmin = result['role'] === 'ADMIN' ? true : false;
        this.loginUserInfo = result;

      }, err => {
        // alert(err);
      });
  }


}
