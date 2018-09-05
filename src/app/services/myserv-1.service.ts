import { Injectable } from '@angular/core';
import { Users } from '../users';
import { USERDATA } from '../userdata';
import { MessageService } from './message.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap  } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Headers } from '@angular/http';
import { HttpRequest } from '@angular/common/http';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { LoginUsers } from '../loginusers';

const httpOptions = {
    // 2 way to post data, refer to php welcome/recvPost
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    // headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

@Injectable()
export class Myserv1Service {

  constructor(private http: HttpClient, private messageService: MessageService) { }
  // getUsers(): Users[]{
  // return USERDATA;}
  data: any;
  // private myUrl = 'http://localhost3/index.php/welcome/hello';
  private myUrl = '/welcome/hello';    // get method
  private myUrl2 = '/welcome/recvPost';  // post method
  private myUrl3 = 'asia/index.php/asiatour/assign_Air/getAssignAir';
   // private myUrl = '/products';
  getUsers(): Observable<Users[]> {
    this.messageService.add('My servcie: get user data');

      return this.http.get<Users[]>(this.myUrl).pipe(
        // tap((user: Users[]) => this.log(`abcdefg ${user.id}`)),
        catchError(this.handleError<Users[]>('User: error'))
    );
  }




  addUser(user: Users): Observable<Users>{

    /*   //{ 'Content-Type': 'application/x-www-form-urlencoded' }  normal post method
    const userParam = new URLSearchParams();
    userParam.set('name', user.name);
    // return this.http.post<Users>(this.myUrl2, userParam.toString(), httpOptions).pipe(
    */
    //  { 'Content-Type': 'application/json' }  send json method
    const userStr = JSON.stringify(user);
    return this.http.post<Users>(this.myUrl2, userStr, httpOptions).pipe(
        tap((user: Users) => this.log(`abcdefg ${user.id}`)),
          catchError(this.handleError<Users>('User: error'))
    );
  }
  getUserByPhp(): Observable<Users[]> {
    let aa: Observable<Users[]>;
    aa = this.http.get<Users[]>(this.myUrl);
    return this.http.get<Users[]>(this.myUrl).pipe(
        catchError(this.handleError('getUsers', []))
    );

  }

  getUserByPhp2(): void {
    let aa: Observable<HttpResponse<object>>;
    // let customHeaders: Headers = new Headers();
    // customHeaders.append('myHeaderName', 'myHeaderValue');
    let bb: Observable<any>;
    bb = this.http.get(this.myUrl3,  {
      headers: {
        PHPSESSID : 'ucq8aavb56srm8te1q725gs8e1'
      },
      params: {
        tourid: 'F0612-2018-CHACS-15',
        assignId: '',
        main_tourid: 'F0612-2018-CHACS-15',
        type: 'smallTourid',
        callback: 'Ext.data.JsonP.callback35'
      },
      observe: 'response',
      responseType: 'json',
      withCredentials: true
    }).map(this.data);

    //aa = this.http.get<Users[]>(this.myUrl3);
    this.http.get(this.myUrl3,  {
      headers: { 'Access-Control-Allow-Origin': '*' },
      withCredentials: true,
      params: {
        tourid: 'F0612-2018-CHACS-15',
        assignId: '',
        main_tourid: 'F0612-2018-CHACS-15',
        type: 'smallTourid',
        callback: 'Ext.data.JsonP.callback35',
        XDEBUG_SESSION_START: '18136'
      },
      observe: 'response',
      responseType: 'json'
    }).toPromise()
    .then(response => {
      console.log(response);
    });
 }

  getJsonP(): void {
    let aa: Observable<Object>;
    aa = this.http.jsonp('asia/index.php/asiatour/assign_Air/getAssignAir', 'Ext.data.JsonP.callback35');
    aa.map(res => res).subscribe(
      data =>  console.log(data));
  }
  getUserByPhp3(): Observable<Object> {
     // let aa: Observable<HttpResponse<Object>>;   // HttpResponse<string>
     let aa: Observable<HttpResponse<string>>;

     return this.http.request('GET', 'asia/index.php/asiatour/assign_Air/getAssignAir', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
      },
      params: {
        'tourid': 'F0612-2018-CHACS-15',
        'assignId': '',
        'main_tourid': 'F0612-2018-CHACS-15',
        'type': 'smallTourid',
        'callback': 'Ext.data.JsonP.callback35',
        'XDEBUG_SESSION_START': '18136'

      },
      observe: 'response',
      responseType: 'text',
      withCredentials: true,
   }).map(res => res.body);
  }

  login(username: string, userpassword: string): Observable<LoginUsers[]> {
    // let aa: Observable<HttpResponse<Object>>;
    //let aa: Observable<Object>;
    return this.http.request('GET', 'asia/index.php/asiatour/assign_Login/login', {
     headers: {
       'Access-Control-Allow-Origin': '*',
       'Content-type': 'application/json; charset=utf-8',
       'Accept': 'application/json'
     },
     params: {
       'officerId': username,
       'password': userpassword,
     },
     observe: 'response',
     responseType: 'json',
     withCredentials: true,
  }).map(function(res) {

    const bb = JSON.stringify(res);
    const bb1 = JSON.parse(bb);

    console.log(res.status);
    return bb1.body.data.functions;
  });

  // aa.map(res => res).subscribe(
  //   data =>  console.log(data)
  // );

 }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }

  private handleError<T> (operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      this.log('failed');
      return of(result as T);
    };
  }
}
