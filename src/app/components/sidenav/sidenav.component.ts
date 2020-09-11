import * as _ from 'lodash';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit, ViewChild, Input, TemplateRef, HostListener } from '@angular/core';
import { FormConfig } from 'src/interface/formio-config';
import { ClientProductsService } from 'src/app/formio.service.ts/client-products.service';
import { ClientProductsServiceService } from 'src/app/sevices/client-products-service.service';
import { Student } from 'src/app/interface/student.interface';
import { Observable } from 'rxjs';
import { OurProductsService } from 'src/app/formio.service.ts/our-products.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { HelperService } from 'src/app/Helper/helper.service';
import { LoginService } from 'src/app/sevices/login.service';
import { tokenName } from '@angular/compiler';
import { RegisterFormService } from 'src/app/formio.service.ts/register-form.service';
import { RegisterServiceService } from 'src/app/sevices/register-service.service';
import { MarriageService } from 'src/app/sevices/marriage.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Input('config') config;
  @ViewChild('template', { static: false }) _template;
  formIo: FormConfig = {
    form: {},
    submission: { data: {} },
    onSubmit: data => {
    },
    beforeSubmit: (event, callback) => {
    }
  };
  modalRef: BsModalRef;
  data = {};
  windowScrolled: boolean;
  loginUserInfo: any = [];


  url: string = 'student';
  usersList: Array<Student>;
  productInfo = [];
  configData = {};
  formName = 'Create Plan';
  isAdmin = false;
  submissionData = {};
  selectedFile: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  path = '/assets/image/';
 
  constructor(

    private registerFormService: RegisterFormService,
    private registerServiceService : RegisterServiceService,
    private marriageService: MarriageService,
    
    private modalService: BsModalService,

    private sanitizer: DomSanitizer,
    private helperService: HelperService,
    private loginService: LoginService
  ) { }

  formIoOptions = {
    submitMessage: '',
    disableAlerts: true,
    noAlerts: true
  };

  onSignUpFormChange(): void {

  }

  onFormLoad(): void {

  }

  ngOnInit() {
    this.isAdmin = this.helperService.userData['role'] === 'ADMIN' ? true : false;
    //this.getgroomInfo(1);
    // this.isAdmin = this.userinfo['role'] === 'ADMIN' ? true : false;
    this.userinfo(tokenName);
  }
 

  getgroomInfo(page: any): void {
    this.marriageService.getgroomInfo(page)
        .subscribe(result => {
            console.log(result);
        }, err => {
            alert(err);
        })
  }

  getPath(plan): string {
    const path = this.path + `${plan.code}`;
    return path;
}

sanitizeImageUrl(imageName: string): SafeUrl {
  const imageUrl = this.path + imageName + '.jpg';
  return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
}

 

// getmemberInfo(page: any): void {
//   this.registerServiceService.getmemberInfo(0)
//       .subscribe(result => {
//           console.log(result[0]);
//           this.productInfo = result[0];
 
//       }, err => {
//           alert(err);
//       })
// }

  
  userinfo(token) {
    this.loginService.getuserInfo()
      .subscribe(result => {
        this.helperService.userData = result;
        this.isAdmin = result['role'] === 'ADMIN' ? true : false;
        this. loginUserInfo = result;

      }, err => {
        // alert(err);
      });
  }
   selectFile(event) {
    this.selectedFile = event.target.files[0];
  }
}
