import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { SearchApiService } from 'src/app/sevices/searchApi-service';
import { FormConfig } from 'src/interface/formio-config';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

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
  data = {};


  
  searchdata = {
    groom_Bride: '',
    ageFrom: '',
    ageTo: '',
    city: '',
    education: ''
  };
  submitted = false;
  path = '/assets/image/';

  productInfo = [];

  formIoOptions = {
    submitMessage: '',
    disableAlerts: true,
    noAlerts: true
  };
  // page: any
  submissionData = {};
  pagination = {
    page: 1,
    total: 0,
    pageSize: 5,
    previousPage: 1
  };

  constructor(
    private searchApiService: SearchApiService,
    private sanitizer: DomSanitizer,

  ) { }

  ngOnInit() {
    this.saveTutorial(1);
  }

  sanitizeImageUrl(imageName: string): SafeUrl {
    const imageUrl = this.path + imageName + '.jpg';
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }
  

  saveTutorial(any) {
    const data = {
      groom_Bride: this.searchdata.groom_Bride,
      ageFrom: this.searchdata.ageFrom,
      ageTo: this.searchdata.ageTo,
      city: this.searchdata.city,
      education: this.searchdata.education,
      page: this.pagination.page.toString()


    };


    this.searchApiService.SearchData(data)
      .subscribe(
        result => {
          if (result && result['body']) {
            console.log(result['body'][0]);
            this.submitted = true;
            this.productInfo = result['body'][0];
            this.pagination.total = result['body'][1] && result['body'][1] % this.pagination.pageSize === 0 ?
              Math.floor(result['body'][1] / this.pagination.pageSize) :
              Math.floor(result['body'][1] / this.pagination.pageSize) + 1;
          }
        },
        error => {
          console.log(error);
        });
  }

  setPreviousAndNextPage(pagetype: any): void {
    if (pagetype === 'Previous') {
      this.saveTutorial(this.pagination.page - 1);
      this.pagination.page = this.pagination.page - 1;
    } else if (pagetype === 'Next') {
      this.saveTutorial(this.pagination.page + 1);
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
    this.saveTutorial(page);
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


  // Search(): void {
  //   this.searchApiService.SearchData(this.submissionData)
  //      .subscribe(event => {

  //     },
  //       err => {
  //         alert(err);

  //       });
  // }



}



