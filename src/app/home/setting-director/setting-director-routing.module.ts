import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddDirectorComponent} from './add-director/add-director.component';
import {ListDirectorComponent} from './list-director/list-director.component'


const routes: Routes = [

  {path: 'add-director', component: AddDirectorComponent},
  {path: 'list-director', component: ListDirectorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingDirectorRoutingModule { }
