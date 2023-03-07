import { Component } from '@angular/core';
import { Person } from 'src/app/Interfaces/person';
import { DataServiceService } from 'src/app/Services/data-service.service';

@Component({
  selector: 'app-upload-data',
  templateUrl: './upload-data.component.html',
  styleUrls: ['./upload-data.component.css']
})
export class UploadDataComponent {
  constructor(private dataService : DataServiceService) { }

  upLoadedPersons : Person[] = []

  upPersonData(form : any) : void {
    console.log(JSON.stringify(form.value)) //temporary
    console.log(JSON.parse(JSON.stringify(form.value)))
    
  }
}
