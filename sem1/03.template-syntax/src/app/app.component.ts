import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FirstTaskComponent} from "./first-task/first-task.component";
import {SecondTaskComponent} from "./second-task/second-task.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FirstTaskComponent,
    SecondTaskComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'templateSyntax';
}
