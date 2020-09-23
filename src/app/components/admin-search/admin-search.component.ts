import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { AdminSearchApiService } from 'src/app/sevices/adminSearchApi.service';
import { SearchApiService } from 'src/app/sevices/searchApi-service';
import { FormConfig } from 'src/interface/formio-config';

@Component({
  selector: 'app-admin-search',
  templateUrl: './admin-search.component.html',
  styleUrls: ['./admin-search.component.css']
})
export class AdminSearchComponent implements OnInit {
 
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
     city: ''
   };
  submitted = false;
  path = '/assets/image/';

  searchByCityInfo = [];

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
    pageSize: 10,
    previousPage: 1
  };

  constructor(
    private adminSearchApiService: AdminSearchApiService,
    private sanitizer: DomSanitizer,

  ) { }

  ngOnInit() {
   // this.searchByCity(1);
  }

  sanitizeImageUrl(imageName: string): SafeUrl {
    const imageUrl = this.path + imageName + '.jpg';
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }
  

  searchByCity(any) {
    const data = {
       city: this.searchdata.city,
      page: this.pagination.page.toString()
    };


    this.adminSearchApiService.SearchDataByCity(data)
      .subscribe(
        result => {
          if (result && result['body']) {
            console.log(result['body'][0]);
            this.submitted = true;
            this.searchByCityInfo = result['body'][0];
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
      this.searchByCity(this.pagination.page - 1);
      this.pagination.page = this.pagination.page - 1;
    } else if (pagetype === 'Next') {
      this.searchByCity(this.pagination.page + 1);
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
    this.searchByCity(page);
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


}
