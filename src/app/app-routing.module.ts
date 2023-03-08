import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ContactComponent } from './Components/contact/contact.component';
import { UploadDataComponent } from './Components/upload-data/upload-data.component';
import { FindPersonComponent } from './Components/find-person/find-person.component';
import { NgModel } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'contact', component : ContactComponent },  
  { path: 'upload-data', component : UploadDataComponent},
  { path: 'find-person', component : FindPersonComponent}
]

@NgModule({
  
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
