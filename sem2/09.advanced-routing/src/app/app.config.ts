import { ApplicationConfig } from '@angular/core';
import {provideRouter} from "@angular/router";
import {AgeVerificationComponent} from "./age-verification/age-verification.component";
import {ShopComponent} from "./shop/shop.component";
import {provideHttpClient} from "@angular/common/http";
import {ageVerificationGuard} from "./age-verification.guard";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { path: 'age-verification', component: AgeVerificationComponent },
      {
        path: 'shop',
        component: ShopComponent,
        canActivate: [ageVerificationGuard]
      },
      {
        path: 'shop/:categoryId',
        component: ShopComponent,
        canActivate: [ageVerificationGuard]
      },
      { path: '**', redirectTo: 'age-verification' },
    ]),
    provideHttpClient()
  ]
};
