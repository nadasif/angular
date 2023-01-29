import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app-component";
import { BookComponent } from "./book/book.component";
import { BooksComponent } from './books/books.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [AppComponent, BookComponent, BooksComponent, CartComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
