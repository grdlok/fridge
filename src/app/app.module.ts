import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { MapModule} from './map/map.module';
import { AppRoutingModule } from './app-routing.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FridgeComponent } from './fridge/fridge.component';

@NgModule({
  declarations: [
    AppComponent,
    FridgeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MapModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
