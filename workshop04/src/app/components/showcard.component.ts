import { Component, OnInit } from '@angular/core';
import { StarWarsDatabaseService } from '../starwars.storage.service';
import { People } from '../models';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-showcard',
  templateUrl: './showcard.component.html',
  styleUrls: ['./showcard.component.css']
})
export class ShowcardComponent implements OnInit {

  canShare = false;
  people1: People;


  //  constructor() { }
  constructor(private swdbSvc: StarWarsDatabaseService, private router: Router, private activatedRoute: ActivatedRoute
  ,private snackBar: MatSnackBar) { }
  
  goBack() {
    this.router.navigate(['/']);
  }
  
  ngOnInit() {
//    this.canShare=||navigator['share'];
    const cid = parseInt(this.activatedRoute.snapshot.params.cid);
    console.log('> pid=',cid);
    this.swdbSvc.find(cid)
      .then(result => {
        this.people1 = result;
        console.log('People1: ', this.people1)
      })
      .catch(err => {
        console.error('Error: ', err)
      })

    /*
    if (this.activatedRoute.snapshot.queryParams.message){
      this.snackBar.open(this.activatedRoute.snapshot.queryParams.message,'', {duration: 1000})
    }
*/


  }

share(){
  navigator['share']({
  title:'Star Wars',
  txt:'Share This'
  })
}

}
