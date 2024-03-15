import { Component } from '@angular/core';
import {AgeVerificationComponent} from './age-verification/age-verification.component';
import {ShopComponent} from './shop/shop.component';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AgeVerificationComponent, ShopComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


}
