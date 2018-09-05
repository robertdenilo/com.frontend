import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mycomp1Component } from './mycomp-1/mycomp-1.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{path: 'comp1', component: Mycomp1Component },
{path: '', redirectTo: '/page1', pathMatch: 'full' },
{path: 'page1', component: Page1Component },
{path: 'page2', component: Page2Component },
{path: 'login', component: LoginComponent },
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule { }
