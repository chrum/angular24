import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import {PageComponent} from "./page/page.component";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter([
    { path: '', component: PageComponent },
    { path: ':dark', component: PageComponent }
  ])]
};
