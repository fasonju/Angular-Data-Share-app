import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Person } from '../Interfaces/person';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http : HttpClient) { }

  uploadPersonData(data : JSON) {
    console.log((data) + "wil be added into the dataBase"); //temporary
  }

  getPersonData() : Observable<Person[]> {
    this.http.get<Person[]>
    var fromServerDataJson = "{name : john}" // temporary
    var person : Person = JSON.parse(fromServerDataJson)
    return of([person])
  }
}
