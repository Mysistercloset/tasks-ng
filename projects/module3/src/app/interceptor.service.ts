import { Injectable } from '@angular/core';

export interface IRes {
  data: any;
  error?: string;
}
@Injectable()
export class InterceptorService {}