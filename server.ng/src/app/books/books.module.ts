import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BooksComponent } from './books.component';
import { BooksService } from './service/books.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [BookComponent, BooksComponent],
  imports: [CommonModule, HttpClientModule],
  providers: [BooksService],
  exports: [BooksComponent],
})
export class BooksModule { }
