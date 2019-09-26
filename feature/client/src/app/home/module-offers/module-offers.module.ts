import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersComponent } from './offers/offers.component';
import { OffersRoutingModule } from './module-offers.routting';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [OffersComponent, DetailsComponent],
  imports: [
    CommonModule,
    OffersRoutingModule
  ]
})
export class ModuleOffersModule { }
