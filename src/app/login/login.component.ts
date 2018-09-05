import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Myserv1Service } from '../services/myserv-1.service';
// import { ToasterService } from 'angular2-toaster';
import { LoginUsers } from '../loginusers';
import { LoginserviceService } from '../services/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // providers: [ ToasterService ]
})

export class LoginComponent implements OnInit {
  data: LoginUsers[];
  @Output() loginservs: EventEmitter<LoginUsers[]> = new EventEmitter();

  constructor(private myserv1: Myserv1Service, private loginserv: LoginserviceService) { }

  ngOnInit() {

  }
  onlogin(username: string, userpassword: string) {
    this.myserv1.login(username, userpassword)
    // .subscribe(data => console.log('abc' + JSON.stringify(data))    );
    // .subscribe(data => this.data = data);
    .subscribe(data => this.handleLogin(data));
    console.log(this.data);
    // console.log(this.data);
    // this.toasterService.pop({type: 'success', body: '操作成功！'});


  }
  handleLogin(data: LoginUsers[]) {
    this.loginserv.loginEventer.emit(data);
    //this.event.emit(data);
    this.data = data;
  }
}
