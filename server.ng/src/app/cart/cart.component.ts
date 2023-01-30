import { Component } from '@angular/core';
import { BookComponent } from '../books/book.component';
import { CartItem } from './interface/cart';
import { CartService } from './service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {

  constructor(private service: CartService){}

  items(): CartItem[]{
    return this.service.list();
  }
}
