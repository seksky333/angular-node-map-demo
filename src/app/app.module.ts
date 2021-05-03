import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NodeMapModule } from 'ng-node-map';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NodeMapModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
