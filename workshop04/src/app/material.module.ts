/*import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class MaterialModule { }
*/

import {NgModule} from "@angular/core";
import {FlexLayoutModule} from '@angular/flex-layout'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import {MatTabsModule, MatTab} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatSnackBarModule} from '@angular/material/snack-bar';

const MODULES = [
FlexLayoutModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule,MatTabsModule,MatListModule,MatSnackBarModule
];

@NgModule({
    imports: MODULES,
    exports: MODULES
})
export class MaterialModule{}