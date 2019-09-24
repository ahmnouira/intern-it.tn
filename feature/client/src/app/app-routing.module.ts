import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component : HomeComponent, children :[
    
    {path: '', loadChildren: './home/module-home/module-home.module#ModuleHomeModule'},
    {path: 'category', loadChildren: './home/module-category/module-category.module#ModuleCategoryModule'},
    {path: 'offers', loadChildren: './home/module-offers/module-offers.module#ModuleOffersModule'},
    {path: 'about', loadChildren:'./home/module-about/module-about.module#ModuleAboutModule'},
    {path: 'contact', loadChildren: './home/module-contact/module-contact.module#ModuleContactModule'},
    {path: 'post-offer', loadChildren: './home/module-post-offer/module-post-offer.module#ModulePostOfferModule'}
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
