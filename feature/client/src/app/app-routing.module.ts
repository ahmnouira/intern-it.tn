import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginGuard } from './services/login.guard';

const routes: Routes = [

  {path: '', component : LoginComponent},
  {path: 'log-in', component: LoginComponent },

  {path: 'sign-in', component: RegisterComponent},

  {path: 'home', component : HomeComponent, canActivate : [LoginGuard], children :[
    
    {path: '', loadChildren: './home/module-home/module-home.module#ModuleHomeModule'},
    {path: 'category', loadChildren: './home/module-category/module-category.module#ModuleCategoryModule'},
    {path: 'offers', loadChildren: './home/module-offers/module-offers.module#ModuleOffersModule'},
    {path: 'about', loadChildren:'./home/module-about/module-about.module#ModuleAboutModule'},
    {path: 'contact', loadChildren: './home/module-contact/module-contact.module#ModuleContactModule'},
    {path: 'post-offer', canActivateChild: [LoginGuard], loadChildren: './home/module-post-offer/module-post-offer.module#ModulePostOfferModule'},
  ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
