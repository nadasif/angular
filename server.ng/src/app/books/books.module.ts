import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BooksComponent } from './books.component';
import { BooksService } from './service/books.service';



@NgModule({
  declarations: [BookComponent, BooksComponent],
  imports: [CommonModule],
  providers: [BooksService],
  exports: [BooksComponent],
})
export class BooksModule { }
