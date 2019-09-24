import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleCategoryRoutingModule } from './module-category-routing.module';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    ModuleCategoryRoutingModule
  ]
})
export class ModuleCategoryModule { }
