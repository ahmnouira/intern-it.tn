import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SettingOfferRoutingModule } from './setting-offer-routing.module';
import { AddOfferComponent } from './add-offer/add-offer.component';
import { ListOfferComponent } from './list-offer/list-offer.component';
import { DetailComponent } from './details/details.component';

@NgModule({
  declarations: [AddOfferComponent, ListOfferComponent, DetailComponent],
  imports: [
    CommonModule,
    SettingOfferRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SettingOfferModule { }
