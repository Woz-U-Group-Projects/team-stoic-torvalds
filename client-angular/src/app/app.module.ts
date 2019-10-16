import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectDisplayComponent } from './project-display/project-display.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CreateComponent } from './components/create/create.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';


@NgModule({
  declarations: [AppComponent, ProjectDisplayComponent, NavBarComponent, CreateComponent, DialogBoxComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, BrowserAnimationsModule, MatSliderModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
