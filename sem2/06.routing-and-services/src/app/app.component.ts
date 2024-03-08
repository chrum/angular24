import { Component } from '@angular/core';
import {AgeVerificationComponent} from './age-verification/age-verification.component';
import {ShopComponent} from './shop/shop.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AgeVerificationComponent, ShopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'routingAndServices';
}
