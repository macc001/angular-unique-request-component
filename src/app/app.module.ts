import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


import { GoodOnPushComponent } from './components/good-on-push/good-on-push.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, GoodOnPushComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
