import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
//import { ArticleComponent } from './app.component';
import { Mycomp1Component } from './mycomp-1/mycomp-1.component';
import { Myserv1Service } from './services/myserv-1.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './services/message.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
	//ArticleComponent,
    Mycomp1Component,
	MessagesComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	AppRoutingModule
  ],
  providers: [Myserv1Service,
             MessageService,
	         HttpClient, HttpHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }
