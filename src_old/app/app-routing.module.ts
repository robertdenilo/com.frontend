import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mycomp1Component } from './mycomp-1/mycomp-1.component';

const routes: Routes = [
{path:'comp1', component:Mycomp1Component }
]
@NgModule({
  exports: [
    RouterModule
  ],
  imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule { }
