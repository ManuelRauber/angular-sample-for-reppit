import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import {
  PeopleDetailComponent,
} from './components/people-detail/people-detail.component';
import { PeopleComponent } from './components/people/people.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PeopleComponent,
    PeopleDetailComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}

// Module
//  - Direktiven (erweitert vorhandenes HTML)
//    - TS-Datei
//  - Components (das kann man sehen, bringt eigenes HTML mit)
//    - HTML-Datei (Struktur, Text)
//    - TS-Datei (Code)
//    - CSS-Datei (allgemein: Style-Datei)
//  - Service (Kümmert sich rein um Daten, hat nichts mit HTML zu tun)
//    - TS-Datei
//  - Pipes
//
//  - Guards
//  - Interceptor
