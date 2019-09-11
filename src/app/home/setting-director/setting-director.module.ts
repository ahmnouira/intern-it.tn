import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingDirectorRoutingModule } from './setting-director-routing.module';
import { AddDirectorComponent } from './add-director/add-director.component';
import { ListDirectorComponent } from './list-director/list-director.component';

@NgModule({
  declarations: [AddDirectorComponent, ListDirectorComponent],
  imports: [
    CommonModule,
    SettingDirectorRoutingModule
  ]
})
export class SettingDirectorModule { }
