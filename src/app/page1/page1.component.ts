import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { Myserv1Service } from '../services/myserv-1.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  users1: Users[];
  data: Object;
  constructor(private myserv1: Myserv1Service) { }

  ngOnInit() {
    // this.login();
    this.getAssignAirs();
  }
  login(): void {
    this.myserv1.login('zhouming', '123456')  // .map((response: Response) => console.log(response.json()));
    .subscribe(data => console.log('mmmmm' + JSON.stringify(data))    );
    // console.log(this.data);
  }
  getAssignAirs(): void {
    // this.users1 = this.myserv1.getUsers();
    // this.myserv1.getUsers().subscribe(users1 => this.users1 = users1);
    // this.myserv1.getUserByPhp().subscribe(users1 => this.users1 = users1['data']);

  // this.myserv1.getUserByPhp3().map((response: Response) => console.log(response.json()));
   this.myserv1.getUserByPhp3().subscribe(
    status =>  console.log(JSON.stringify(status) + 'xxxxxxx')
  );
    // console.log(this.data);
    // this.myserv1.getJsonP();
  }
}
