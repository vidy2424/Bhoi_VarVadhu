import { Student } from '../interface/student.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminSearchApiService {

constructor(private httpClient: HttpClient) { }

serverUrl = 'http://localhost:8083/onlineshopping';

 
SearchDataByCity(data): Observable<HttpEvent<any>> {
const formData: FormData = new FormData();

formData.append('data', JSON.stringify(data));

const req = new HttpRequest('POST', `${this.serverUrl}/SearchDataByCity`, formData, {
 //   headers: headers.set('Content-Type', 'multipart/form-data'),
    // reportProgress: true,
    //  responseType: 'json'
});

return this.httpClient.request(req);
}
}
