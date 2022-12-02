import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule, Routes } from '@angular/router';

import {CommonModule } from '@angular/common'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { publicationsService } from 'src/services/publication.services';




const approutes : Routes=[

{path:'', redirectTo:'/login', pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,


 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(approutes),
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [publicationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
