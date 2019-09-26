import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ModulePostOfferRoutingModule } from './module-post-offer-routing.module';
import { PostOfferComponent } from './post-offer/post-offer.component';

@NgModule({
  declarations: [PostOfferComponent],
  imports: [
    CommonModule,
    ModulePostOfferRoutingModule,
    ReactiveFormsModule, 
    FormsModule
  ]
})
export class ModulePostOfferModule { }
