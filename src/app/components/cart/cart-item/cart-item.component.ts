import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../../interfaces";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
@Input()
cartItem:IPost
  constructor() { }

  ngOnInit(): void {
  }

}
