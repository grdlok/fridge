import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { AppComponent } from './app.component'

const appRoutes: Routes = [
  { path: '',   redirectTo: '/map', pathMatch: 'full' },
  { path: '**', redirectTo: '/map', pathMatch: 'full' }
];

export const AppRoutingModule = RouterModule.forRoot(appRoutes)