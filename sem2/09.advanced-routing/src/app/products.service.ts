import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {forkJoin, map} from "rxjs";


const CATEGORIES_URL = 'https://edu.chrum.it/data/categories.json';
const PRODUCTS_URL = 'https://edu.chrum.it/data/clean_products.json';

interface NewCategory {
  name: string;
  id: number;
}

interface Product {
  name: string;
  price: number;
  category: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public categories$ = this._http.get<Array<NewCategory>>(CATEGORIES_URL);
  public products$ = this._http.get<Array<Product>>(PRODUCTS_URL);

  public categoriesWithProducts$ = forkJoin([
    this.categories$,
    this.products$
  ]).pipe(
    map(([categories, allProducts]) => {
      return categories.map((category) => {

        const products =  allProducts.filter((product) => product.category === category.id);

        return {
          ...category,
          products
        }
      });
    })
  )
  constructor(private _http: HttpClient) { }
}