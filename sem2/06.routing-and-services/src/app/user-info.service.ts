import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  private _ageVerified = false;

  public get isOfAge() { return this._ageVerified; }

  public verifyAge() {
    this._ageVerified = true;
  }

  public reset() {
    this._ageVerified = false;
  }

}
