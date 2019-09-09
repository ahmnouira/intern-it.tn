import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
<<<<<<< HEAD
//import { AppComponent } from './app.component';
import { OffersComponent } from './offers/offers.component';

@NgModule({
  declarations: [
  //  AppComponent,
    OffersComponent
=======
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
>>>>>>> 2619da916166a8d442525fb62c4752f7a842cc5c
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
<<<<<<< HEAD
  bootstrap: [OffersComponent]
=======
  bootstrap: [AppComponent]
>>>>>>> 2619da916166a8d442525fb62c4752f7a842cc5c
})
export class AppModule { }
