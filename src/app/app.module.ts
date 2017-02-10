import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import {
  AgmCoreModule
} from 'angular2-google-maps/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: environment.apiKey
    }),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
