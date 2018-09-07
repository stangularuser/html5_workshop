import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { StarWarService } from './starwars.service';

import {StarWarsDatabaseService} from './starwars.storage.service';
import { PeopleListComponent } from './components/people-list.component';

import {ApprouteModule} from './approute.module';
import { AddPeopleComponent } from './components/add-people.component';
import { ShowcardComponent } from './components/showcard.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  //all components that belong to this module
  declarations: [
    AppComponent,
    PeopleListComponent,
    AddPeopleComponent,
    ShowcardComponent
    ],
  imports: [ //importing modules
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, MaterialModule, HttpClientModule, ApprouteModule, MatCardModule
  ],
providers: [StarWarService, StarWarsDatabaseService]  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
