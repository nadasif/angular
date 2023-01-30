import { Component, Input } from '@angular/core';
import { CartService } from '../cart/service/cart.service';
import { Book } from './interface/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() book: Book = {} as Book;
  cartQty: number = 0;

  constructor(private cartService: CartService) { }

  addToCart() {
    this.cartQty = this.cartService.add(this.book);
  }

  removeFromCart() {
    this.cartQty = this.cartService.remove(this.book);
  }
}
