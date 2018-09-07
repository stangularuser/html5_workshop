import {Injectable} from "@angular/core";
//import {HttpClient, HttpParams} from "@angular/common/http";
import {HttpClient} from "@angular/common/http";


import {People} from './models'

//make this into a service
//inject http into the service

const URL = 'http://swapi.co/api/people/';

@Injectable()
export class StarWarService{

    constructor(private http: HttpClient){}
searchPeople(id: number):Promise<People> {
//  this.http.get(URL + id)  
//string concatenation


//string interpolation
return(
this.http.get<People>(`https://swapi.co/api/people/${id}`)
.toPromise()
.then(result=>{
    result.id=id;
    result.image= `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
    return(result);
})

//enrich the data then return
//add id and image url in
);
}
}



