import { Component } from '@angular/core';
import {Category, Product} from "../definitions";
import {CommonModule} from '@angular/common';
import {CategorySelectorComponent} from './category-selector/category-selector.component';
import {ProductsListComponent} from './products-list/products-list.component';
import {Router, RouterLink} from "@angular/router";
import {UserInfoService} from "../user-info.service";
import {ProductsService} from "../products.service";
import {delay} from "rxjs";

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
  public allCategories: Array<Category> = [];
  public productsToDisplay: Array<Product> = [];
  public productsInCart: Array<Product> = [];

  constructor(
    private _userInfo: UserInfoService,
    private _router: Router,
    private _productsService: ProductsService
  ) {

    // if (this._userInfo.isOfAge === false) {
    //
    //   alert('Verify your age first!');
    //   this._router.navigate(['/age-verification']);
    //
    // }

    this._productsService.load()
      .pipe(
        delay(1000)
      )
      .subscribe((data) => {
        this.allCategories = data;
      })

    console.log('shop page');

  }


  public onCategorySelected(category: Category): void {
    this.productsToDisplay = category.products;
  }

  public addToCart(product: Product): void {
    console.log("Adding to cart: " + product.name);
    this.productsInCart.push(product);
  }
}
