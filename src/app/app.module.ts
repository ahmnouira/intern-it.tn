import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebackComponent } from './home/sideback/sideback.component';
import { FooterComponent } from './home/footer/footer.component';
import { LayoutComponent } from './home/layout/layout.component';
import { HeaderComponent } from './home/header/header.component';
import { NotFoundComponent } from './errors/not-found-error/not-found.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginGuard } from './login/login.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebackComponent,
    FooterComponent,
    LayoutComponent,
    HeaderComponent,
    NotFoundComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
