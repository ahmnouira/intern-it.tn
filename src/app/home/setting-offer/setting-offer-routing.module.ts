import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddOfferComponent } from './add-offer/add-offer.component';
import { ListOfferComponent } from './list-offer/list-offer.component';
import { DetailComponent } from './details/details.component';

const routes: Routes = [

{path: 'add-offer', component: AddOfferComponent},
{path: 'list-offer',component: ListOfferComponent},
{path: 'offer/:id', component: DetailComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingOfferRoutingModule { }
