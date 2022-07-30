import { Injectable } from '@angular/core';
import { Produto } from './produtos/produtos';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Produto[] = []

  addToCart(produto: Produto) {
    this.items.push(produto);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
 

  constructor() { }
}
