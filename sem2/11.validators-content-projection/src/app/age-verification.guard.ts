import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {UserInfoService} from "./user-info.service";

export const ageVerificationGuard: CanActivateFn = (route, state) => {
  const userInfoService = inject(UserInfoService);
  const router = inject(Router);

  if (userInfoService.isOfAge) {
    return true;
  }

  alert('Verify your age first!');

  return router.navigate(['age-verification']);
};
