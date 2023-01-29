import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../interface/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() book: Book = {} as Book;
  @Output() cartEvent = new EventEmitter<Book>();

  addToCart() {
    this.cartEvent.emit(this.book);
  }
    
}
