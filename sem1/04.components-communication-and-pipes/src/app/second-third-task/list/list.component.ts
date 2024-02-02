import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Person} from "../models";
import {FilterPipe} from "../../filter.pipe";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    FilterPipe,
    FormsModule
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Input()
  public data: Array<Person> = [];

  @Output()
  public remove = new EventEmitter<Person>();

  public selectedFramework = '';
}
