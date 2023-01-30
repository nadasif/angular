import { Injectable } from "@angular/core";
import { Book } from "../../books/interface/book";
import { Cart, CartItem } from "../interface/cart";


@Injectable({
    providedIn: 'root',
})
export class CartService {
    cartItems: Array<CartItem> = [];

    list(): Array<CartItem> {
        return this.cartItems;
    }

    add(book: Book) {
        let qty = 1;
        const item = this.cartItems.find(item => item.book === book);
        if (item) {
            qty = ++item.quantity;
        } else {
            this.cartItems.push(<CartItem>{ book: book, quantity: qty })
        }
        return qty;
    }

    remove(book: Book): number {
        let qty = 0;
        const item = this.cartItems.find(item => item.book === book);
        if (item) {
            qty = --item.quantity;
            this.cartItems = this.cartItems.filter(item => item.quantity > 0);
        }
        return qty;
    }

}