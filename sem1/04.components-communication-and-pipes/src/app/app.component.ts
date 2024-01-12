import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FirstTaskComponent} from './first-task/first-task.component';
import {SecondThirdTaskComponent} from './second-third-task/second-third-task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FirstTaskComponent,
    SecondThirdTaskComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'componentsCommunicationPipes';
}
