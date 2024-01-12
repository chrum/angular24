import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FirstTaskComponent} from "./first-task/first-task.component";
import {SecondTaskComponent} from "./second-task/second-task.component";
import {ThirdTaskComponent} from "./third-and-fourth-task/third-task.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FirstTaskComponent,
    SecondTaskComponent,
    ThirdTaskComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'templateSyntax';
}
