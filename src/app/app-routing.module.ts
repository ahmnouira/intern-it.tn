import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './errors/not-found-error/not-found.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';


const routes: Routes = [

  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},

  { path: 'home', component: HomeComponent, canActivate:[LoginGuard], children : [

  {   path: 'setting-offer',
      loadChildren: './home/setting-offer/setting-offer.module#SettingOfferModule'
  },

  {
    path: 'setting-director',
    loadChildren: './home/setting-director/setting-director.module#SettingDirectorModule'
  },

  {
    path: 'setting-user',
    loadChildren: './home/setting-user/setting-user.module#SettingUserModule'
  },



 ]},
    {path: '**', component: NotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
