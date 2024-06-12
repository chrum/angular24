import {Component, Input, Output, EventEmitter } from '@angular/core';
import {CommonModule} from '@angular/common';
import {Product} from '../../definitions';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() data!: Product;

}
