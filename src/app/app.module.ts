import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
// import { ArticleComponent } from './app.component';
import { Mycomp1Component } from './mycomp-1/mycomp-1.component';
import { Myserv1Service } from './services/myserv-1.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './services/message.service';
import { LoginserviceService } from './services/loginservice.service';
import { TouridService } from './services/tourid.service';
// import { ToasterModule, ToasterService } from 'angular2-toaster';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClient, HttpHeaders, HttpHandler, HttpClientModule } from '@angular/common/http';
import { MyHeaderComponent } from './my-header/my-header.component';
import { MyFooterComponent } from './my-footer/my-footer.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { LoginComponent } from './login/login.component';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { BootstrapModalModule } from 'ngx-bootstrap-modal';
// import { MOdalModule} from 'ngx-bootstrap/modal';

@NgModule({

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  //  ToasterModule,
  //  BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
  // ArticleComponent,
    Mycomp1Component,
    MessagesComponent,
    MyHeaderComponent,
    MyFooterComponent,
    Page1Component,
    Page2Component,
    LoginComponent
  ],

  providers: [Myserv1Service,
             MessageService,
             LoginserviceService,
             TouridService
  //           ToasterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
