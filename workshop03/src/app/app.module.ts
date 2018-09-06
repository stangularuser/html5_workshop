import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { StarWarService } from './starwars.service';

import {StarWarsDatabaseService} from './starwars.storage.service';


//import { AddressEntryComponent } from './components/address-entry.component';
//import {AddressService} from './address.service';
//import { AddressListComponent } from './components/address-list/address-list.component';

@NgModule({
  declarations: [
    AppComponent
  //  AddressEntryComponent,
  //  AddressListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, MaterialModule, HttpClientModule
  ],
providers: [StarWarService, StarWarsDatabaseService]  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
