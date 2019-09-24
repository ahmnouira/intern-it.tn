import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleHomeRoutingModule } from './module-home-routing.module';
import { FindRecentComponent } from './find-recent/find-recent.component';

@NgModule({
  declarations: [FindRecentComponent],
  imports: [
    CommonModule,
    ModuleHomeRoutingModule
  ]
})
export class ModuleHomeModule { }
