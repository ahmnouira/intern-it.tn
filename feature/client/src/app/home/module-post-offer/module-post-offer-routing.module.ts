import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostOfferComponent } from './post-offer/post-offer.component';

const routes: Routes = [{
  path:'', component: PostOfferComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulePostOfferRoutingModule { }
