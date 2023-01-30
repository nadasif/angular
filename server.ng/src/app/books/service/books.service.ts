import { Injectable } from '@angular/core';
import { Book } from '../interface/book';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  books$ = <Observable<Book[]>>this.http.get<Book[]>("http://localhost:8080/book/list")
    .pipe(
      catchError(this.handleError),
    );

  handleError(error: any): Observable<never> {
    return throwError(() => "Method not implemented")
  }


  list(): Observable<Book[]> {
    return this.http.get<Book[]>(`http://localhost:8080/book/list`);
  }

}
