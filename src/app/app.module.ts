import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ContactComponent } from './Components/contact/contact.component';
import { UploadDataComponent } from './Components/upload-data/upload-data.component';
import { PersonListComponent } from './Components/person-list/person-list.component';
import { FindPersonComponent } from './Components/find-person/find-person.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashboardComponent,
    ContactComponent,
    UploadDataComponent,
    PersonListComponent,
    FindPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
