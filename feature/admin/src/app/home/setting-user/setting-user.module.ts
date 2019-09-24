import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from  '@angular/forms'
import { SettingUserRoutingModule } from './setting-user-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [AddUserComponent, ListUserComponent, UserDetailComponent],
  imports: [
    CommonModule,
    SettingUserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SettingUserModule { }
