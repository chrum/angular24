import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

interface Person {
  name: string;
  framework: string
}

@Component({
  selector: 'app-third-task',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './third-task.component.html',
  styleUrl: './third-task.component.scss'
})
export class ThirdTaskComponent {
  maxNumber = 5;
  public color = '';

  public name = '';
  public selectedFramework = '';

  public peopleInTheRoom: Array<Person> = [];

  addPerson() {
    if (this.maxNumber === this.peopleInTheRoom.length) {
      alert('The room is full!');
      return;
    }

    this.peopleInTheRoom.push({
      name: this.name,
      framework: this.selectedFramework
    });
    this.name = '';
    this.selectedFramework = '';
    this._updateColor();
  }

  public clear() {
    this.peopleInTheRoom = [];
    this._updateColor();
  }

  public removePerson(person: Person) {
    this.peopleInTheRoom = this.peopleInTheRoom.filter((item) => {
      return item !== person;
    })
  }

  private _updateColor() {
    if (this.maxNumber === this.peopleInTheRoom.length) {
      this.color = 'red';

    } else if (this.maxNumber - this.peopleInTheRoom.length <= 3) {
      this.color = 'orange';

    } else {
      this.color = ''
    }
  }
}
