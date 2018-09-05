import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsers } from '../loginusers';
import { LoginserviceService } from '../services/loginservice.service';


@Component({
  selector: 'app-my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css']
})
export class MyHeaderComponent implements OnInit {
  aa = true;
  bb = false;
  cc = false;
  mydata: LoginUsers[];
  indi: boolean[] = [false];
  protected currentPrice: number;


  constructor(private router: Router, private loginserv: LoginserviceService ) {
    loginserv.loginEventer.subscribe(data => this.updateData(data));
   }

  ngOnInit() {
    // this.loginserv.loginEventer.subscribe(data => this.updateData(data));

  }
  updateData(data: LoginUsers[]) {
    this.mydata = data;
    for (let i = 0; i < data.length; i++) {
      this.indi[i] = false;
    }
  }

  displayTour() {
    this.router.navigate(['/page2']);
  }

  eventHandler(user: LoginUsers[]) {
    this.mydata = user;
    console.log('trigger by output');
    this.indi[0] = false;
    for (let i = 1; i <= user.length; i++) {
      this.indi[i] = false;
    }
  }

  onclickmenu(sel: number) {
    for (let i = 0; i < this.mydata.length; i++) {
      this.indi[i] = false;
    }
    this.indi[sel] = true;

  }

  checkState(i: number) {
    if (this.indi !== undefined) {
      return this.indi[i];
    } else {return false; }

  }
}
