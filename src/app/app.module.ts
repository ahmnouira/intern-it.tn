import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebackComponent } from './home/sideback/sideback.component';
import { FooterComponent } from './home/footer/footer.component';
import { LayoutComponent } from './home/layout/layout.component';
import { HeaderComponent } from './home/header/header.component';
import { NotFoundComponent } from './errors/not-found-error/not-found.component';
import { LoginComponent } from './login/login.component';

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
