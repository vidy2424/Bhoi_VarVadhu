import { Student } from './../interface/student.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }

  serverUrl = 'http://localhost:8083/onlineshopping';


  ClientProducts(data: Student): Observable<any> {
    const url = '/clientProducts';
    return this.httpClient.post(this.serverUrl + url, data);
  }

  

Search(data): Observable<HttpEvent<any>> {
  const formData: FormData = new FormData();
  const formSubmissiomData = {
      
  };
  formData.append('data', JSON.stringify(data.data));
  formData.append('file', data.files);

  const req = new HttpRequest('POST', `${this.serverUrl}/clientproduct`, formData, {
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
 