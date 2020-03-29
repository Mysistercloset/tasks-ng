import { Injectable } from '@angular/core';
export interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  status: boolean;
  feedbacksCount: number;
  images: IProductImage[];
  rating?: number | null;
  feedbacks?: IFeedback;
  subCategory?: string;
}

export interface IFeedback {
  rate: number;
  advantages: string;
  limitations: string;
  description: string;
}
export interface IProductImage {
  url: string;
  source: string;
}

@Injectable()
export class ProductsService {}

