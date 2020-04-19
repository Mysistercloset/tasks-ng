import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { CardComponent } from './card/card.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ProductsComponent, CardComponent],
  imports: [
    ProductsRoutingModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductsComponent,
      },
    ]),
  ],
  providers: [],
})
export class ProductsModule {}
