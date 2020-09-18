import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { LoginService } from '../sevices/login.service';
import { map } from 'rxjs/operators';
import { resolve } from 'url';
import { SearchApiService } from '../sevices/searchApi-service';

@Injectable()
export class SearchService {
    private _userData: object = {};
  
    get userData(): object {
        return this._userData;
    }

    set userData(data: object) {
        this._userData = data;
    }
 
    constructor(
        private searchApiService: SearchApiService,

    ) {
    }

    // load(): Promise<any> {
    //     return new Promise((resolve, reject) => {
    //         this.initApp()
    //             .subscribe(
    //                 data => {
    //                     resolve(data);
    //                 }, err => {
    //                     console.error(err);
    //                 }
    //             )
    //     });
    // }

    // initApp(): Observable<any> {

    //     return this.loginService.getuserInfo()
    //         .pipe(
    //             map(result => {
    //                 this.userData = result;
    //                 return result;
    //             })
    //         );
    // }
}
