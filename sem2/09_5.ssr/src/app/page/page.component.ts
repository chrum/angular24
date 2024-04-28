import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CurrencyPipe} from "@angular/common";
import {ListComponent} from "../list/list.component";

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [ListComponent, CurrencyPipe],
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {


  public flag = false;

  public data = [
    { name: 'Tea', price: 1 },
    { name: 'Bread', price: 2 },
    { name: 'Milk', price: 3 },
  ]

  constructor(
    private _route: ActivatedRoute,
  ) {
  }

  public ngOnInit() {
    if (this._route.snapshot.params['dark']) {
      document.body.className = 'dark';
    }
  }


  public onClick(num: number) {
    console.log(num);
  }


}
