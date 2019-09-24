import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulePostOfferRoutingModule } from './module-post-offer-routing.module';
import { PostOfferComponent } from './post-offer/post-offer.component';

@NgModule({
  declarations: [PostOfferComponent],
  imports: [
    CommonModule,
    ModulePostOfferRoutingModule
  ]
})
export class ModulePostOfferModule { }
