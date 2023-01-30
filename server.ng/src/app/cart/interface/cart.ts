import { Book } from "../../books/interface/book";

export interface CartItem {
    book: Book;
    quantity: number;
}

export interface Cart {
    items: CartItem[];
}
