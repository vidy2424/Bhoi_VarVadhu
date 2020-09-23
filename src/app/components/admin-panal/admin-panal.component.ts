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
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-panal',
  templateUrl: './admin-panal.component.html',
  styleUrls: ['./admin-panal.component.css']
})
export class AdminPanalComponent implements OnInit {
 
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
  fileInfos: Observable<any>;
  itemsPerSlide = 4;

  singleSlideOffset = true;
  noWrap = true;

  pagination = {
    page: 1,
    total: 0,
    pageSize: 5,
    previousPage: 1
  };

  constructor(

    private registerFormService: RegisterFormService,
    private registerServiceService : RegisterServiceService,
    private marriageService: MarriageService,
    
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
    this.isAdmin = this.helperService.userData['role'] === 'ADMIN' ? true : false;
    this.getbrideInfo(1);
    // this.isAdmin = this.userinfo['role'] === 'ADMIN' ? true : false;
    this.userinfo(tokenName);
    this.router;
  }
 

  getbrideInfo(page: any): void {
    this.marriageService.getbrideInfo(page)
        .subscribe(result => {
            console.log(result);
            this.productInfo = result[0];
            this.pagination.total = result[1] && result[1] % this.pagination.pageSize === 0 ?
            Math.floor(result[1] / this.pagination.pageSize) :
            Math.floor(result[1] / this.pagination.pageSize) + 1;
   
        }, err => {
            alert(err);
        })
  }

  viewBride(userId: any){
    const url = '/Profile/';
    this.router.navigate([url, userId]);
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

  addmemberInfo(): void {
    this.configData = {
      formName: this.formName
    };
    this.openModalWithClass(this._template);
  }

  userinfo(token) {
    this.loginService.getuserInfo()
      .subscribe(result => {
        this.helperService.userData = result;
        this.isAdmin = result['role'] === 'ADMIN' ? true : false;

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
          // alert(err);
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
    this.formName = `Edit Plan: ${item.fullName}`;
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


  // sroll button
  @HostListener ("window:scroll", [])
  onWindowScroll() {
      if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
          this.windowScrolled = true;
      } 
     else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
          this.windowScrolled = false;
      }
  }
  scrollToTop() {
      (function smoothscroll() {
          var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
          if (currentScroll > 0) {
              window.requestAnimationFrame(smoothscroll);
              window.scrollTo(0, currentScroll - (currentScroll / 8));
          }
      })();
  }

  setPreviousAndNextPage(pagetype: any): void {
    if (pagetype === 'Previous') {
      this.getbrideInfo(this.pagination.page - 1);
      this.pagination.page = this.pagination.page - 1;
    } else if (pagetype === 'Next') {
      this.getbrideInfo(this.pagination.page + 1);
      this.pagination.page = this.pagination.page + 1;
    }
    this.removeActivePage(this.pagination.previousPage);
    this.setActivePage(this.pagination.page);
    this.pagination.previousPage = this.pagination.page;
  }

  counter(i: number) {
    const arr = [];
    for (let index = 0; index < i; index++) {
      arr.push(index + 1);
    }
    return arr;
  }

  changePage(page: number): void {
    this.pagination.page = page;
    this.getbrideInfo(page);
    this.removeActivePage(this.pagination.previousPage);
    this.setActivePage(page);
    this.pagination.previousPage = page;
  }

  setActivePage(page: number): void {
    const element = document.getElementById(this.getId(page));
    element.className = 'page-item active';
  }

  removeActivePage(page: number): void {
    const element = document.getElementById(this.getId(page));
    element.className = 'page-item';
  }

  getId(page: any): string {
    return 'page_' + page;
  }



  // submitForm(event: any): void {
  //   console.log(event);
  //   this.ourProductsService.submitForm(event.data, () => {
  //     this.modalRef.hide();
  //   });
  // }



}
