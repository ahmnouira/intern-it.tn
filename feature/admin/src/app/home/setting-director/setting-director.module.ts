import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { SettingDirectorRoutingModule } from './setting-director-routing.module';
import { AddDirectorComponent } from './add-director/add-director.component';
import { ListDirectorComponent } from './list-director/list-director.component';
import { DirectorDetailComponent } from './director-detail/director-detail.component';




@NgModule({
  declarations: [AddDirectorComponent, ListDirectorComponent, DirectorDetailComponent],
  imports: [
    CommonModule,
    SettingDirectorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SettingDirectorModule { }
