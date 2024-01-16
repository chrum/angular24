import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule, NgIf} from "@angular/common";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    NgIf
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  public name = '';
  public familyName = '';
  public editing = true;

  @Output()
  public submit = new EventEmitter<string>();

  public onSubmitClicked() {
    const fullname = this.name + ' ' + this.familyName;
    this.submit.emit(fullname);
    this.editing = false;
  }

  public onEditClicked() {
    this.submit.emit('');
    this.editing = true;
  }
}
