import { ApplicationConfig } from '@angular/core';
import {provideRouter} from "@angular/router";
import {AgeVerificationComponent} from "./age-verification/age-verification.component";
import {ShopComponent} from "./shop/shop.component";
import {provideHttpClient} from "@angular/common/http";
import {ageVerificationGuard} from "./age-verification.guard";
import {CartComponent} from './shop/cart/cart.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: 'age-verification', component: AgeVerificationComponent },
      {
        path: 'shop',
        component: ShopComponent,
        // canActivate: [ageVerificationGuard]
      },
      {
        path: 'shop/:categoryId',
        component: ShopComponent,
        // canActivate: [ageVerificationGuard]
      },
      {
        path: 'cart',
        component: CartComponent,
      },
      { path: '**', redirectTo: 'age-verification' },
    ]),
    provideHttpClient()
  ]
};
