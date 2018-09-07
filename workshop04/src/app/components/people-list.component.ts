import { Component, OnInit } from '@angular/core';
import { StarWarsDatabaseService } from '../starwars.storage.service';
import {People} from '../models';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

people: People[]=[];

//private AllCharacter: People[]=[];


//inject in activated route
  constructor(private swdbSvc: StarWarsDatabaseService,private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.swdbSvc.getAll()
    .then(result=>{
      this.people=result;
      console.log('People: ',this.people)
    })
    .catch(err=>{
      console.error('Error: ', err)
    })

    /*
    if (this.activatedRoute.snapshot.queryParams.message){
      this.snackBar.open(this.activatedRoute.snapshot.queryParams.message,'', {duration: 1000})
    }
*/
  }

  addPeople(){
    this.router.navigate(['/add']);
  }
}
