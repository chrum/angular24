import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Product } from "../../definitions";
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SortPipe} from '../../sort.pipe';

@Component({
  selector: "app-products-list",
  standalone: true,
  imports: [CommonModule, FormsModule, SortPipe],
  templateUrl: "./products-list.component.html",
  styleUrls: ["./products-list.component.scss"]
})
export class ProductsListComponent {
  @Input() public products: Array<Product> = [];
  @Output() buy = new EventEmitter<Product>();

  public sortDirection: string = "asc";

  addToCart(product: Product): void {
    this.buy.emit(product);
  }
}
