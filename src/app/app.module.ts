import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { BadOnPushComponent} from './components/bad-on-push/bad-on-push.component';
import { GoodOnPushComponent } from './components/good-on-push/good-on-push.component';
import { DefaultChangeStrategyComponent } from './components/default-change-strategy/default-change-strategy.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, BadOnPushComponent, GoodOnPushComponent, DefaultChangeStrategyComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
