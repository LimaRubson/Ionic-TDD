import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ProductsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductsProvider {

  public http: HttpClient;
  public products: any;

  constructor() {

    this.products = [
        { title: 'Cool shoes', description: 'Isn\'t it obvious?', price: '39.99' },
        { title: 'Broken shoes', description: 'You should probably get the other ones', price: '89.99' },
        { title: 'Socks', description: 'The essential footwear companion', price: '2.99' }
    ];
    
    console.log('Hello ProductsProvider Provider');
  }

}
