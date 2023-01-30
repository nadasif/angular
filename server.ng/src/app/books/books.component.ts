import { Component, OnInit } from '@angular/core';
import { Book } from './interface/book';
import { BooksService } from './service/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = [];
  constructor(private service: BooksService){}

  ngOnInit(): void {
    this.books = this.service.list();
  }

  sort(){
    this.books = this.books.sort((a,b) => a.price - b.price);
  }

  addToCart(event: Book){
    console.log(event);
  }
  

}
