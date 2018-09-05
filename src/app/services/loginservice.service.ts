import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { LoginUsers } from '../loginusers';


@Injectable()
export class LoginserviceService {
  loginEventer: EventEmitter<LoginUsers[]> = new EventEmitter();
  //loginEventer: EventEmitter<string> = new EventEmitter();
  constructor() { }

}
