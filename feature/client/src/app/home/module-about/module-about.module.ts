import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleAboutRoutingModule } from './module-about-routing.module';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    ModuleAboutRoutingModule
  ]
})
export class ModuleAboutModule { }
