import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleContactRoutingModule } from './module-contact-routing.module';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ModuleContactRoutingModule
  ]
})
export class ModuleContactModule { }
