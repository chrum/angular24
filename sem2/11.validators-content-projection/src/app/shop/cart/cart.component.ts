import { Component, OnInit } from '@angular/core';
import {CommonModule, Location} from '@angular/common';
import {CartService} from '../../cart.service';
import {Product} from '../../definitions';
import {ProductComponent} from '../product/product.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public cartItems$ = this._cart.items$;

  constructor(
    private _cart: CartService,
    private _location: Location
  ) { }

  ngOnInit(): void {
  }

  public back() {
    this._location.back();
  }

  public remove(product: Product) {
    this._cart.remove(product);
  }
}
