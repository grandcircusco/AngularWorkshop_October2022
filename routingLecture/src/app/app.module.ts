import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PeopleComponent } from './components/people/people.component';
import { PersonDetailsComponent } from './components/person-details/person-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes:Routes = [
  { path: 'people', component: PeopleComponent },
  { path: 'people/:id', component: PersonDetailsComponent},
  { path: '', redirectTo:'/people', pathMatch: 'full'},
  { path: '**', component:PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    PersonDetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
