import * as _ from 'lodash';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit, ViewChild, Input, TemplateRef } from '@angular/core';
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
import { Router } from '@angular/router';


@Component({
  selector: 'app-related-cards',
  templateUrl: './related-cards.component.html',
  styleUrls: ['./related-cards.component.css']
})
export class RelatedCardsComponent implements OnInit {
 
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

  url: string = 'student';
  usersList: Array<Student>;
  relatedcardInfo = [];
  configData = {};
  formName = 'Create Plan';
  isAdmin = false;
  submissionData = {};
  selectedFile: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  path = '/assets/image/';
  fileInfos: Observable<any>;
  itemsPerSlide = 4;

  singleSlideOffset = true;
  noWrap = true;
  city = [];


  constructor(

    private registerFormService: RegisterFormService,
    private registerServiceService : RegisterServiceService,
    private modalService: BsModalService,
    private sanitizer: DomSanitizer,
    private helperService: HelperService,
    private loginService: LoginService,
    private router: Router

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
    this.userinfo(tokenName);
    this.isAdmin = this.helperService.userData['role'] === 'ADMIN' ? true : false;
    //this.getmemberInfo(0);
    this.getGroomByCity();
    
    // this.isAdmin = this.userinfo['role'] === 'ADMIN' ? true : false;
    
    this.router;

  }

 
  getPath(plan): string {
    const path = this.path + `${plan.code}`;
    return path;
}

sanitizeImageUrl(imageName: string): SafeUrl {
  const imageUrl = this.path + imageName + '.jpg';
  return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
}

viewbyID(userId: any){
  const url = '/Profile/';
  this.router.navigate([url, userId]);
  }
 

getmemberInfo(start: any): void {
  this.registerServiceService.getmemberInfo(0)
      .subscribe(result => {
          console.log(result[0]);
          this.relatedcardInfo = result[0];
      }, err => {
          alert(err);
      })
}

getGroomByCity(): void {
   this.registerServiceService.getGroomByCity()
      .subscribe(result => {
        console.log(result);
        this.relatedcardInfo = result;
        _.remove(this.relatedcardInfo, item => {
          return item.id === this.helperService.userData['id'];
        });
      }, err => {
          alert(err);
      });
}

  addmemberInfo(): void {
    this.configData = {
      formName: this.formName
    };
    this.openModalWithClass(this._template);
  }

  userinfo(token) {
 
    this.loginService.getuserInfo()
      .subscribe(result => {
        this.helperService.userData['city'] = result;

        this.isAdmin = result['role'] === 'ADMIN' ? true : false;
        //this.loginUserInfo = result;
        this.city = result['city'];
        console.log('result', this.city);
      }, err => {
        // alert(err);
      });
  }



  openModalWithClass(template: TemplateRef<any>, item?: any) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
    this.showLoginForm(item);
  }

  selectFile(event) {
    this.selectedFile = event.target.files[0];
  }

 

  upload(): void {
    const data = this.formIo.submission.data;
    this.submissionData['data'] = data;
    this.submissionData['files'] = this.selectedFile;
    if (data && data['id']) {
      this.registerServiceService.editmemberInfo(this.submissionData['data'],this.submissionData['files'], this.submissionData['data']['id'])
        .subscribe(result => {
          console.log(result);
        }, err => {
          alert(err);
        });
    }else{
    this.registerServiceService.upload(this.submissionData)
       .subscribe(event => {

      },
        err => {
          this.progress = 0;
          this.message = 'Could not upload the file!';
          this.currentFile = undefined;
        });
  }
}

deletememberInfo(item: any): void {
    this.registerServiceService.deletememberInfo(item.id)
      .subscribe(result => {
        console.log(result);
      }, err => {
        alert(err);
      });
  }
 

  editmemberInfo(item: any): void {
    this.configData = {
        formName: this.formName,
        selectedItem: item
    };
    this.openModalWithClass(this._template, item);
    this.formName = `Edit Plan: ${item.client_product_name}`;
}

  addPlan(): void {
    this.configData = {
      formName: this.formName
    };
    this.openModalWithClass(this._template);
  }

  showLoginForm(item?: any): void {
    console.log(item);
    if (!_.isEmpty(item)) {
      this.registerFormService.data = item;
      this.formIo.submission.data = item;
    }
    this.formIo.form = this.registerFormService.getForm();
  }

  // submitForm(event: any): void {
  //   console.log(event);
  //   this.ourProductsService.submitForm(event.data, () => {
  //     this.modalRef.hide();
  //   });
  // }


}
