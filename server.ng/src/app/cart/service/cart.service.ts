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
        const item = this.cartItems.find(item => item.book.id === book.id);
        if (item) {
            ++item.quantity;
        } else {
            this.cartItems.push(<CartItem>{ book: book, quantity: 1 })
        }
    }

    remove(book: Book) {
        const item = this.cartItems.find(item => item.book.id === book.id);
        if (item) {
            --item.quantity;
            this.cartItems = this.cartItems.filter(item => item.quantity > 0);
        }
    }

    getQuantity(book: Book): number {
        const item = this.cartItems.find(item => item.book.id === book.id);
        if(item){
            return item.quantity;
        }else{
            return 0;
        }
    }

}