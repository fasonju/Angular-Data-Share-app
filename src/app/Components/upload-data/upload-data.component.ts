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
    this.upLoadedPersons.push(form.value)
    this.dataService.uploadPersonData(form.value)
    
  }
}
