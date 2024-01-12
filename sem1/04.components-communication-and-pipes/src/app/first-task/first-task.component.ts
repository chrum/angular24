import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-first-task',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './first-task.component.html',
  styleUrl: './first-task.component.scss'
})
export class FirstTaskComponent {
  public name = '';
  public familyName = '';

  welcome() {
    alert('Welcome ' + this.name + ' ' + this.familyName);
  }

  public bye() {
    alert('Bye ' + this.name);
    this.name = '';
    this.familyName = '';
  }
}
