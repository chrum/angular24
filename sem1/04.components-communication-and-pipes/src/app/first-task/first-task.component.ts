import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {FormComponent} from "./form/form.component";

@Component({
  selector: 'app-first-task',
  standalone: true,
  imports: [
    FormsModule,
    FormComponent
  ],
  templateUrl: './first-task.component.html',
  styleUrl: './first-task.component.scss'
})
export class FirstTaskComponent {

  public fullname = '';

  public onFormSubmit(fullname: string) {
    this.fullname = fullname;
  }

  public welcome() {
    alert('Welcome ' + this.fullname);
  }

  public bye() {
    alert('Bye ' + this.fullname);
  }
}
