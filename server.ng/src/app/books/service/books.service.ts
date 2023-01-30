import { Injectable } from '@angular/core';
import { Book } from '../interface/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private readonly imgBase = "https://m.media-amazon.com/images/I/";

  constructor() { }

  list(): Book[] {
    return [
      {
        id: "91PPuezpNr",
        name: "Only The Innocent",
        author: "Rachel Abbott",
        price: 7.99,
        imgSrc: `${this.imgBase}91PPuezpNrL._AC_UL320_.jpg`,
      },
      {
        id: "91T0FcC2t-",
        name: "Lethal Defence",
        author: "Michael Stagg",
        price: 4.99,
        imgSrc: `${this.imgBase}91T0FcC2t-L._AC_UL320_.jpg`,
      },
      {
        id: "81Ioa8KT2z",
        name: "Gone Forever",
        author: "Scott Blade",
        price: 4.99,
        imgSrc: `${this.imgBase}81Ioa8KT2zL._AC_UL320_.jpg`,
      },
      {
        id: "71Dh+bJz-a",
        name: "Nothing Left",
        author: "Scott Blade",
        price: 7.49,
        imgSrc: `${this.imgBase}71Dh+bJz-aL._AC_UL320_.jpg`,
      },
      {
        id: "71gDtm1U0F",
        name: "Book Lovers",
        author: "Emily Henry",
        price: 19.80,
        imgSrc: `${this.imgBase}71gDtm1U0FL._AC_UL320_.jpg`,
      },
      {
        id: "71PNGYHykr",
        name: "It Starts with Us",
        author: "Coleen Hoover",
        price: 13.78,
        imgSrc: `${this.imgBase}71PNGYHykrL._AC_UL320_.jpg`,
      },
      {
        id: "91Szm8Fpdf",
        name: "Spare",
        author: "Prince Herry",
        price: 30.54,
        imgSrc: `${this.imgBase}91Szm8FpdfL._AC_UL320_.jpg`,
      },
    ];
  }

}
