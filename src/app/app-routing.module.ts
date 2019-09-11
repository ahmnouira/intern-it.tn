import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent, children : [

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
   }

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
