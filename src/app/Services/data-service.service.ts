import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Person } from '../Interfaces/person';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  uploadPersonData(data : JSON) {
    console.log(data); //temporary
  }

  getPersonData() : Observable<[Person]> {
    var fromServerDataJson = "{name : john}" // temporary
    var person : Person = JSON.parse(fromServerDataJson)
    return of([person])
  }
}
