import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingUserRoutingModule } from './setting-user-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUserComponent } from './list-user/list-user.component';

@NgModule({
  declarations: [AddUserComponent, ListUserComponent],
  imports: [
    CommonModule,
    SettingUserRoutingModule
  ]
})
export class SettingUserModule { }
