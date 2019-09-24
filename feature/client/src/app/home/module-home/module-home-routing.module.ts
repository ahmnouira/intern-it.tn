import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindRecentComponent } from './find-recent/find-recent.component';

const routes: Routes = [{
  path: '', component: FindRecentComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleHomeRoutingModule { }
