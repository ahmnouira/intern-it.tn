import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingOfferRoutingModule } from './setting-offer-routing.module';
import { AddOfferComponent } from './add-offer/add-offer.component';
import { ListOfferComponent } from './list-offer/list-offer.component';

@NgModule({
  declarations: [AddOfferComponent, ListOfferComponent],
  imports: [
    CommonModule,
    SettingOfferRoutingModule
  ]
})
export class SettingOfferModule { }
