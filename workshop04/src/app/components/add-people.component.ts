import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StarWarService } from '../starwars.service';
import { StarWarsDatabaseService } from '../starwars.storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-people',
  templateUrl: './add-people.component.html',
  styleUrls: ['./add-people.component.css']
})
export class AddPeopleComponent implements OnInit {

  searchTerm: number;

  constructor(private swSvc: StarWarService,
    private swdbSvc: StarWarsDatabaseService, private router: Router) { }

  processForm(form: NgForm) {
    console.log('form: ', form.value);
    this.searchTerm = form.value.PeopleID;
    console.log('form: ', this.searchTerm);
    //console.log('form: ',form.value.PeopleID);
    //Cast form.value Address

    this.swSvc.searchPeople(this.searchTerm)
      .then(result => {
        console.log('result: ', result);
        this.swdbSvc.save(result);
      })
      .catch(err => {
        console.error('err: ', err);
      })
    form.resetForm();
  }
  //constructor() { }

  ngOnInit() {
  }


  goBack() {
    this.router.navigate(['/']);
  }

  save(form: NgForm) {
    console.log('ngForm: ', form.value.peopleId);
    this.swdbSvc.find(form.value.PeopleID)
      .then(
        () => {
          this.router.navigate(['/']);
          throw false;
        },
        this.swSvc.searchPeople.bind(this.swSvc)
      )
      .then(this.swdbSvc.save.bind(this.swdbSvc))
      .then(id => {
        console.log('id = ', id);
        this.router.navigate(['/']), {
          queryParams: { message: `Saved ${id}` }
        }
      })
  }


}
