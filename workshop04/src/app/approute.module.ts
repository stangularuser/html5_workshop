import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';

import {PeopleListComponent} from './components/people-list.component';

import {RouterModule, Routes } from '@angular/router';
import { AddPeopleComponent } from './components/add-people.component';
import { ShowcardComponent } from './components/showcard.component';

const ROUTES: Routes = [
  
  {path: '',component: PeopleListComponent},
  {path: 'people', component: PeopleListComponent},
  {path: 'add', component: AddPeopleComponent},
  {path: 'detail/:cid', component: ShowcardComponent},
    {path: '**', redirectTo: '/', pathMatch: 'full'}
//  {path: '**', component: PeopleListComponent}
  ];

@NgModule({
  imports: [    //CommonModule
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
 // declarations: []
})
export class ApprouteModule { }
