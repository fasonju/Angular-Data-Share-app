import { Component } from '@angular/core';
import { interval } from 'rxjs';
@Component({
  selector: 'app-find-person',
  templateUrl: './find-person.component.html',
  styleUrls: ['./find-person.component.css']
})
export class FindPersonComponent {
  
    ngOnInit(): void {
      interval(1000).subscribe(x => {
        console.log(this.searchValue);
    });
    }
    constructor() { }
    
    searchValue : string = ""
    searchParameter : string = "name"
}
