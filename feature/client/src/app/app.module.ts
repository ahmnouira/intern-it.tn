import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { FooterHomeComponent } from './home/footer/footer.component';
import { HeaderHomeComponent } from './home/header/header.component';
import { LayoutComponent } from './home/layout/layout.component';

import { OffersService} from './home/offers.service';
import { ServiceUserService } from './service-user.service';
import { DirectorService } from './director.service';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginGuard } from './services/login.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterHomeComponent,
    HeaderHomeComponent,
    LayoutComponent,
    LoginComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule, HttpClientModule
    
  ],
  providers: [OffersService, ServiceUserService, DirectorService, LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
