import { Student } from '../interface/student.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchApiService {

  constructor(private httpClient: HttpClient) { }

  serverUrl = 'http://localhost:8083/onlineshopping';


  SearchData1(data): Observable<any> {
    const url = '/Search';
    const formData: FormData = new FormData();
    formData.append('data', JSON.stringify(data));

    return this.httpClient.post(this.serverUrl + url, formData);
  }

  

  SearchData(data): Observable<HttpEvent<any>> {
  const formData: FormData = new FormData();
  
  formData.append('data', JSON.stringify(data));
  
  const req = new HttpRequest('POST', `${this.serverUrl}/Search`, formData, {
   //   headers: headers.set('Content-Type', 'multipart/form-data'),
      // reportProgress: true,
      //  responseType: 'json'
  });

  return this.httpClient.request(req);
}


  getClientProducts(): Observable<any> {
    const url = '/clientProducts/products';
    return this.httpClient.get(this.serverUrl + url);
  }

}
 