import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';

import {CatComponent} from './components/cat.component';
import {HomeComponent} from './components/home.component';


import {RouterModule, Routes } from '@angular/router';

const ROUTES: Routes = [
  {path: '',component: HomeComponent},//root
  {path: 'home', component: HomeComponent},
  {path: 'cat', component: CatComponent},
 // {path: 'dog', component: DogComponent},
//wildcard - is the last route
  {path: '**', component: HomeComponent}
  ];



@NgModule({
  imports: [    //CommonModule
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
 // declarations: []
})
export class ApprouteModule { }
