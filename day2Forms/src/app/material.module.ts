import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

const MODULES =[
  MatToolbarModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule
]

@NgModule({
  imports: MODULES,
  exports: MODULES
  declarations: []
})
export class MaterialModule { }
