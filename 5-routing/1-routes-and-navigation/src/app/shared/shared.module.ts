import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';
import { BASE_URL_TOKEN } from '../config';
import { ReactiveFormsModule } from '@angular/forms';
import { ImgUrlPipe } from './pipes/img-url.pipe';
import { ProductsService } from './services/products.service';
import { environment } from '../../environments/environment';
import { RouterModule } from '@angular/router';
import { InfiniteScrollComponent } from './components/infinite-scroll/infinite-scroll.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';

@NgModule({
  declarations: [StarRatingComponent, ImgUrlPipe, InfiniteScrollComponent],
  imports: [ReactiveFormsModule, MatIconModule, HttpClientModule, CommonModule, RouterModule],
  exports: [
    ReactiveFormsModule,
    RouterModule,
    InfiniteScrollComponent,
    MatIconModule,
    HttpClientModule,
    CommonModule,
    ImgUrlPipe,
    StarRatingComponent,
  ],
  providers: [],
})
export class SharedModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ProductsService,
        {
          provide: BASE_URL_TOKEN,
          useValue: environment.baseUrl,
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: InterceptorService,
          multi: true,
        },
      ],
    };
  }
}
