import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { FooterHomeComponent } from './home/footer/footer.component';
import { HeaderHomeComponent } from './home/header/header.component';
import { LayoutComponent } from './home/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterHomeComponent,
    HeaderHomeComponent,
    LayoutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
