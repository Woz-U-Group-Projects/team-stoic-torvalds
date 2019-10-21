import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';
import { MessageComponent } from './message/message.component';
import { MessageAddComponent } from './message-add/message-add.component';
import { MessageEditComponent } from './message-edit/message-edit.component';


@NgModule({
  declarations: [AppComponent, NavBarComponent, DialogBoxComponent, MessageComponent, MessageAddComponent, MessageEditComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, BrowserAnimationsModule, MatSliderModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

