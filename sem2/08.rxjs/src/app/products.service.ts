import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category} from "./definitions";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) { }

  public load() {
    const URL = 'https://edu.chrum.it/data/products.json';

    return this._http.get<Array<Category>>(URL);
  }


}
