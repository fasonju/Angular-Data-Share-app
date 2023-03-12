import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Person } from '../Interfaces/person';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private endpoint : string = "person"
  private domain : string | undefined

  constructor(private http : HttpClient) {
      this.domain = "https://localhost:7169/"
   }


  uploadPersonData(data : Person) {
    this.http.post<Person>("https://localhost:7169/person", data).subscribe()
  }

  getPersonData() : Observable<Person[]> {
    this.http.get<Person[]>
    var fromServerDataJson = "{name : john}" // temporary
    var person : Person = JSON.parse(fromServerDataJson)
    return of([person])
  }
}
