import { Component } from '@angular/core';
import { Book } from '../interface/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  btnDisabled: boolean = false;
  newBook: Book = {
    name: "",
    author: "",
    price: 0,
    imgSrc: "",
  };

  books: Book[] = [ 
    {
      name: "Only The Innocent",
      author:  "Rachel Abbott",
      price: 7.99,
      imgSrc: "https://m.media-amazon.com/images/I/91PPuezpNrL._AC_UL320_.jpg",
    },
    {
      name: "Lethal Defence",
      author:  "Michael Stagg",
      price: 4.99,
      imgSrc: "https://m.media-amazon.com/images/I/91T0FcC2t-L._AC_UL320_.jpg",
    },
  ];

  sort(){
    this.books = this.books.sort((a,b) => a.price - b.price);
  }

  addToCart(event: Book){
    console.log(event);
  }
  

}
