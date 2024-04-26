import { Component } from '@angular/core';
import {Category, Product} from "../definitions";
import {CommonModule} from '@angular/common';
import {CategorySelectorComponent} from './category-selector/category-selector.component';
import {ProductsListComponent} from './products-list/products-list.component';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {UserInfoService} from "../user-info.service";
import {ProductsService} from "../products.service";
import {concatMap, debounceTime, delay, filter, forkJoin, map, take} from "rxjs";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    CommonModule,
    CategorySelectorComponent,
    ProductsListComponent,
    RouterLink
  ],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  public allCategories$ = this._productsService.categoriesWithProducts$
    .pipe(delay(1000));

  public productsToDisplay: Array<Product> = [];
  public productsInCart: Array<Product> = [];

  constructor(
    private _userInfo: UserInfoService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _productsService: ProductsService
  ) {
    console.log(this._route.snapshot.params);

    this._route.params
      .pipe(
        debounceTime(1000),
        map(params => params['categoryId']),
        filter(categoryId => categoryId),
        concatMap((categoryId) => this.allCategories$.pipe(
          map((categories) => categories.find((c) => c.id === +categoryId))
        ))
      )
      .subscribe((selectedCategory) => {

        if (selectedCategory) {
          this.onCategorySelected(selectedCategory);
        }

    })
  }


  public onCategorySelected(category: Category): void {
    this.productsToDisplay = category.products;
    this._router.navigate(['/shop', category.id]);
  }

  public addToCart(product: Product): void {
    console.log("Adding to cart: " + product.name);
    this.productsInCart.push(product);
  }
}
