import { Component, OnInit } from '@angular/core';
import { Book } from './interface/book';
import { BooksService } from './service/books.service';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[] = [];
  obs$: Observable<Book[]>;
  constructor(private service: BooksService) { }

  ngOnInit(): void {
    // this.service.list().subscribe(books => {
    //   this.books = books
    // });

    this.obs$ = this.service.books$.pipe(
      map(response => this.books = response),
      catchError(this.handleError)
    );

  }

  sort() {
    this.books = this.books.sort((a, b) => a.price - b.price);
  }

  addToCart(event: Book) {
    console.log(event);
  }

  handleError(error: any): Observable<never> {
    return throwError(() => "Method not implemented")
  }


}
