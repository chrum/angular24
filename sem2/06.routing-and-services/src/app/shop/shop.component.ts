import { Component } from '@angular/core';
import {Category, Product} from "../definitions";
import {categories} from "../data";
import {CommonModule} from '@angular/common';
import {CategorySelectorComponent} from './category-selector/category-selector.component';
import {ProductsListComponent} from './products-list/products-list.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, CategorySelectorComponent, ProductsListComponent],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  public allCategories: Array<Category> = categories;
  public productsToDisplay: Array<Product> = [];
  public productsInCart: Array<Product> = [];

  public onCategorySelected(category: Category): void {
    this.productsToDisplay = category.products;
  }

  public addToCart(product: Product): void {
    console.log("Adding to cart: " + product.name);
    this.productsInCart.push(product);
  }
}
