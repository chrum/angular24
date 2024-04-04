import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Category } from "../../definitions";
import {CommonModule} from '@angular/common';

@Component({
  selector: "app-category-selector",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./category-selector.component.html",
  styleUrls: ["./category-selector.component.scss"]
})
export class CategorySelectorComponent {
  @Input() public categories: Array<Category> = [];
  @Output() public selected = new EventEmitter<Category>();

  public onCategoryClicked(category: Category): void {
    this.selected.emit(category);
  }
}
