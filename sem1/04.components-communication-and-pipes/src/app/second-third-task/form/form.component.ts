import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Person} from "../models";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  @Output() public submit = new EventEmitter<Person>();

  public name = '';
  public selectedFramework = '';

  public addPerson() {
    const person = {
      name: this.name,
      framework: this.selectedFramework
    }

    this.submit.emit(person);
    this.name = '';
    this.selectedFramework = '';
  }
}
