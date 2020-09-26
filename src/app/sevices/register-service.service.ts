import { Student } from '../interface/student.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private httpClient: HttpClient) { }

  serverUrl = 'http://localhost:8083/onlineshopping';


  addmemberInfo(data: Student): Observable<any> {
    const url = '/clientProducts';
    return this.httpClient.post(this.serverUrl + url, data);
  }

  editmemberInfo(data,file, id:any): Observable<HttpEvent<any>> {
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

  getmemberInfo(start: any): Observable<any> {
    const url = `/member/info/${start}`;
    return this.httpClient.get(this.serverUrl + url);
}

  deletememberInfo(id: any): Observable<any> {
    const url = `/memberDelete/${id}`;
    return this.httpClient.delete(this.serverUrl + url, { responseType: 'text' as 'json' });
}

getGroomByCity(): Observable<any> {
  const url = `/groom/city`;
  return this.httpClient.get(this.serverUrl + url);
}

getRecentlyadded(): Observable<any> {
  const url = `/Recentlyadded`;
  return this.httpClient.get(this.serverUrl + url);
}

getAllMembers(start: any): Observable<any> {
  const url = `/allMember/${start}`;
  return this.httpClient.get(this.serverUrl + url);
}


}