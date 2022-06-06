import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { GoodOnPushComponent } from './components/good-on-push/good-on-push.component';
import { CommunicationService } from './service/message.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, GoodOnPushComponent],
  providers: [CommunicationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
