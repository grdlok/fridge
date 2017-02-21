import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { AppComponent } from './app.component';
import { FridgeComponent } from './fridge/fridge.component';

const appRoutes: Routes = [
  { path: '',  component: FridgeComponent },
  { path: '**', redirectTo: '/map', pathMatch: 'full' }
];

export const AppRoutingModule = RouterModule.forRoot(appRoutes);
