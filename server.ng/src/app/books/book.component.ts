import { Component, Input } from '@angular/core';
import { CartService } from '../cart/service/cart.service';
import { Book } from './interface/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  @Input() book: Book = {} as Book;

  constructor(private cartService: CartService) { }

  addToCart() {
    this.cartService.add(this.book);
  }

  removeFromCart() {
    this.cartService.remove(this.book);
  }

  cartQty(): number{
    return this.cartService.getQuantity(this.book);
  }

  imgSrc(): string {
    return `https://m.media-amazon.com/images/I/${this.book.imgId}L._AC_UL320_.jpg`;
  }
}
