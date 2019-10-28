import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import 'core-js/proposals/reflect-metadata';
import { ApiService } from './service/api.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptor} from './core/interceptor';


import { LoginComponent } from './login/login.component';
import { ListComponent } from './user/list/list.component';
import { AddMessageComponent } from './user/add-message/add-message.component';
import { EditMessageComponent } from './user/edit-message/edit-message.component';




@NgModule({
  declarations: [AppComponent, LoginComponent, ListComponent, AddMessageComponent, EditMessageComponent],

  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, BrowserAnimationsModule, MatSliderModule, ReactiveFormsModule
  ],
  providers: [ApiService, {provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

