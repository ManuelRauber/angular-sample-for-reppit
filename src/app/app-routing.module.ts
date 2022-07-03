import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {
  PeopleDetailComponent
} from './components/people-detail/people-detail.component';
import { PeopleComponent } from './components/people/people.component';

// Spezifischere Routen als erstes definieren und weniger spezifischere als letztes

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',    // -> http://localhost:4200/home
    component: HomeComponent
  },
  {
    path: 'people', // /people
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: PeopleComponent,
      },
      {
        path: ':peopleId',  // /people/:peopleId
        component: PeopleDetailComponent,
      }
    ]
  }
  /*{
    path: 'people/:peopleId',
    component: PeopleDetailComponent,
  },
  {
    path: 'people',  // -> http://localhost:4200/people
    component: PeopleComponent
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


//
