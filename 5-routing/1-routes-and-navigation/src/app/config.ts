import { InjectionToken } from '@angular/core';
import { environment } from '../environments/environment';

export const BASE_URL: string = environment.baseUrl;
export const BASE_URL_TOKEN: InjectionToken<string> = new InjectionToken(BASE_URL);
