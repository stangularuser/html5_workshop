import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
giphys: Giphy[] = [];

constructor(private giphySvc: GiphyService){}


search(form: NgForm){
 
//  console.log('value: ',form.value);
console.log('form: ',form.value);
this.giphySvc.search(form.value.searchTerm)
.then((result: Giphy[])=> {
  this.giphys=result;
console.log('giphys: ',this.giphys);
})
  title = 'day3-rest';
}
