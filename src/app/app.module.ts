import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { CarsComponent }  from './components/cars.component';
import {FilterPipe} from './filter.pipe';
import { routing } from './app.routing';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent, CarsComponent, FilterPipe ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
