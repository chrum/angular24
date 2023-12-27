import { Component } from '@angular/core';

@Component({
  selector: 'app-second-task',
  standalone: true,
  imports: [],
  templateUrl: './second-task.component.html',
  styleUrl: './second-task.component.scss'
})
export class SecondTaskComponent {
  maxNumber = 5;
  public currentNumber = 0;
  public color = '';

  addPerson() {
    if (this.maxNumber === this.currentNumber) {
      alert('The room is full!');
      return;
    }

    this.currentNumber++;
    this._updateColor();
  }

  subtract() {
    this.currentNumber--;
    this._updateColor();
  }

  private _updateColor() {
    if (this.maxNumber === this.currentNumber) {
      this.color = 'red';

    } else if (this.maxNumber - this.currentNumber <= 3) {
      this.color = 'orange';

    } else {
      this.color = ''
    }
  }
}
