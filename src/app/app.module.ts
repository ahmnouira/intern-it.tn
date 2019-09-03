import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
//import { AppComponent } from './app.component';
import { OffersComponent } from './offers/offers.component';

@NgModule({
  declarations: [
  //  AppComponent,
    OffersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [OffersComponent]
})
export class AppModule { }
