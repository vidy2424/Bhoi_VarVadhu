import { Student } from '../interface/student.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarriageService {

  constructor(private httpClient: HttpClient) { }

  serverUrl = 'http://localhost:8083/onlineshopping';


  addmemberInfo(data: Student): Observable<any> {
    const url = '/clientProducts';
    return this.httpClient.post(this.serverUrl + url, data);
  }

  editbrideInfo(data, file, id: any): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    const formSubmissiomData = {

    };
    formData.append('data', JSON.stringify(data));
    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.serverUrl}/member`, formData, {
      //   headers: headers.set('Content-Type', 'multipart/form-data'),
      // reportProgress: true,
      //  responseType: 'json'
    });

    return this.httpClient.request(req);
  }

  upload(data): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    const formSubmissiomData = {
    };
    formData.append('data', JSON.stringify(data.data));
    formData.append('file', data.files);

    const req = new HttpRequest('POST', `${this.serverUrl}/member`, formData, {
      // headers: headers.set('Content-Type', 'multipart/form-data'),
      // reportProgress: true,
      // responseType: 'json'
    });
    return this.httpClient.request(req);
  }

  getbrideInfo(start: any): Observable<any> {
    const url = `/bride/info/${start}`;
    return this.httpClient.get(this.serverUrl + url);
  }

  deletememberInfo(id: any): Observable<any> {
    const url = `/memberDelete/${id}`;
    return this.httpClient.delete(this.serverUrl + url, { responseType: 'text' as 'json' });
  }

  getgroomInfo(start: any): Observable<any> {
    const url = `/groom/info/${start}`;
    return this.httpClient.get(this.serverUrl + url);
  }

}