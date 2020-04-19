import { NgModule } from '@angular/core';
import { OneProductComponent } from './one-product.component';
import { RouterModule } from '@angular/router';
import { ProductGuard } from './product.guard';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [OneProductComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: OneProductComponent,
        canActivate: [ProductGuard],
      },
    ]),
  ],
  providers: [ProductGuard],
})
export class OneProductModule {}
