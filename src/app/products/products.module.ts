import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { appProductRouting } from './products.routing';
import { ProductComponent } from './product.component';
import {
  MatCardModule,
  MatTableModule,
  MatButtonModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    appProductRouting
  ],
  exports: [ProductComponent],
  declarations: [ProductComponent]
})
export class ProductModule {
}
