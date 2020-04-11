import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResourcesListComponent } from './resources-list/resources-list.component';
import {RestApiModule} from "./rest-api/rest-api.module";

@NgModule({
  declarations: [
    AppComponent,
    ResourcesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RestApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
