import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Workshop03';


processForm(form: NgForm){
  console.log('form: ',form.value);
  //Cast form.value Address
    
  form.resetForm();
}

}