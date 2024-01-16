import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Person} from "../models";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Input()
  public data: Array<Person> = [];

  @Output()
  public remove = new EventEmitter<Person>();
}
