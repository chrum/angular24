import {Component, inject} from '@angular/core';
import {
  FormBuilder,
  FormControl, FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {Router} from "@angular/router";
import {UserInfoService} from "../user-info.service";
import {ProductsService} from "../products.service";
import {debounceTime, map} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-age-verification',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './age-verification.component.html',
  styleUrls: ['./age-verification.component.scss']
})
export class AgeVerificationComponent {
  public availableCategories$ = this._productsService.categories$;
  public years: Array<number> = [];
  private _currentYear = new Date().getFullYear();

  private _fb = inject(FormBuilder);

  public ageForm = this._fb.group({
    age: ['', [Validators.required, Validators.min(18)]],
    year: ['', [Validators.required]],
    selectedCategoryId: ['']
  }, {
    // validators: [
    //   (fg: FormGroup) => {
    //     const age = +fg.controls['age'].value;
    //     const year = +fg.controls['year'].value;
    //
    //     const ageFromYear = this._currentYear - year;
    //     if (ageFromYear !== age) {
    //       return { ageYearNoMatch: true };
    //       // return alert('Your age and year you were born do not match');
    //     }
    //
    //     return null;
    //   }
    // ]
    asyncValidators: [
      (fg: FormGroup) => {
            const age = +fg.controls['age'].value;
            const year = +fg.controls['year'].value;

            return this._http.get('https://chrum.it/verify-age.php', {
              params: {
                age, year
              }
            }).pipe(
              map((ageYearGood) => {
                if (ageYearGood) {
                  return null;
                }

                return { ageYearNoMatch: true };
              })
            )
      }
    ]
  })

  public get age() {
    return this.ageForm.get('age') as FormControl;
  }

  public get year() {
    return this.ageForm.controls['year'];
  }

  public constructor(
    private _router: Router,
    private _productsService: ProductsService,
    private _userInfo: UserInfoService,
    private _http: HttpClient
  ) {

    this.age.valueChanges
      .pipe(
        debounceTime(500)
      )
      .subscribe((value) => {
        if (value && value < 18) {
          alert('You seem to be too young for this!')
        }
      })

    const minYear = this._currentYear - 100;
    for (let year = this._currentYear; year >= minYear; year--) {
      this.years.push(year);
    }
  }

  public verify(): void {
    console.log(this.ageForm.value);

    const age = +this.ageForm.value['age']!;
    if (age < 18) {
      return alert('You need to be over 18 to access this site');
    }


    alert('Success, access granted!');
    this._userInfo.verifyAge();

    const selectedCategoryId = this.ageForm.value['selectedCategoryId'];

    this._router.navigate(['/shop', selectedCategoryId]);
  }

}
