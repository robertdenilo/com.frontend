import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Headers } from '@angular/http';
import { HttpRequest } from '@angular/common/http';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TouridService {

  constructor(private http: HttpClient) { }
  getTourId() {
    // let aa: Observable<HttpResponse<string>>;

    return this.http.request('GET', 'asia/index.php/asiatour/assign_Bus/getToursJson', {
     headers: {
       'Access-Control-Allow-Origin': '*',
       'Content-type': 'application/json; charset=utf-8',
       'Accept': 'application/json'
     },
     params: {

     },
     observe: 'response',
     responseType: 'text',
     withCredentials: true,
  }).map(function(res) {
    console.log(res.status);
    if (res.status === 200) {
      const bb = JSON.stringify(res.body);
      const bb1 = JSON.parse(bb);
      const bb2 = bb1.data;
      return bb2;
    }
    return null;
  });

  }
}
