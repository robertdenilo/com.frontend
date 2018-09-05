import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
// import { USERDATA } from '../userdata';
import { Myserv1Service } from '../services/myserv-1.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-mycomp-1',
  templateUrl: './mycomp-1.component.html',
  styleUrls: ['./mycomp-1.component.css']
})
export class Mycomp1Component implements OnInit {
  abc = 'good good';
  user: Users = {
    id: 1,
    name: 'Passenger1'
  };

  selectedUser: Users = {
    id: 1,
    name: 'Ninja2'
  };
  users1: Users[];

  constructor(private myserv1: Myserv1Service) { }

  getUsers(): void {
    // this.users1 = this.myserv1.getUsers();
    // this.myserv1.getUsers().subscribe(users1 => this.users1 = users1);
    this.myserv1.getUserByPhp().subscribe(users1 => this.users1 = users1);
    console.log(this.users1);
  }
  ngOnInit() {
    this.getUsers();
  }
  onSelect(user2: Users): void {
      this.selectedUser = user2;
  }
  add(name: string): void {
    name = name.trim();
      if (!name) {return; }
    this.myserv1.addUser({name} as Users).subscribe(user => this.users1.push(user[0]));
    console.log(this.users1);
  }
}
