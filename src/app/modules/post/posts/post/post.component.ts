import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../../../interfaces";
import {DataTransferService} from "../../../../services";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: IPost;


  constructor(private dataTransferService: DataTransferService) {
  }

  ngOnInit(): void {
  }

  addToCart() {
    let currentStore = this.dataTransferService.store.getValue();
    currentStore.push(this.post);
    this.dataTransferService.store.next(currentStore);
  }
}
