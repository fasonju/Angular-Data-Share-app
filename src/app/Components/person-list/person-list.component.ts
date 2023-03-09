import { Component, Input } from '@angular/core';
import { Person } from 'src/app/Interfaces/person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent {

  @Input() personList : Person[] = [] 
}
