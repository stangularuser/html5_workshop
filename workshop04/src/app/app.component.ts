import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StarWarService} from './starwars.service';
import { StarWarsDatabaseService } from './starwars.storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'Workshop03';

  searchTerm:number;
constructor(private swSvc:StarWarService,
private swdbSvc: StarWarsDatabaseService){}

processForm(form: NgForm){
  console.log('form: ',form.value);
  this.searchTerm=form.value.PeopleID;
  console.log('form: ',this.searchTerm);
  //console.log('form: ',form.value.PeopleID);
   //Cast form.value Address
  

   this.swSvc.searchPeople(this.searchTerm)
   .then(result=>{
console.log('result: ',result);

this.swdbSvc.save(result);


   })
.catch(err => {
console.error('err: ',err);
})
  form.resetForm();
}

}