import { Component, OnInit } from '@angular/core';
import {DataTransferService} from "../../services";
import {IPost} from "../../interfaces";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cart:IPost[]
  constructor(private dataTransferService:DataTransferService) { }

  ngOnInit(): void {
  this.cart =  this.dataTransferService.store.getValue();
    console.log(this.cart)
  }

}
