import { Injectable } from '@angular/core';
import { Users } from '../users';
import { USERDATA } from '../userdata';
import { MessageService } from './message.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap  } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class Myserv1Service {

  constructor(private http: HttpClient, private messageService: MessageService) { }
  //getUsers(): Users[]{
  //return USERDATA;}
  getUsers(): Observable<Users[]>{
	  this.messageService.add('My servcie: get user data'); 
	  return of(USERDATA);
  }
  private myUrl = 'http://localhost2/asia/index.php/test/angularTest';
  const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  addUser(user: Users): Observable<Users>{
	  return this.http.post<Users>(this.myUrl, user, httpOptions).pipe(
	      tap((user: Users) => this.log(`abcdefg ${user.id}`)),
          //catchError(this.handleError<Users>('User: error'))
	  );
  }
  getUserByPhp(): Observable<Users[]> {
	  return this.http.get<Users[]>(this.myUrl).pipe(
	     //catchError(this.handleError('getUsers',[]));
	  )
	  
  }
  
  private handleError<T> (operation = 'operation', result?: T){
	  return (error: any): Observable<T> => {
		  console.error(error);
		  this.log("failed");
		  return of(result as T);
	  }
  }
}
