import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IPost} from "../../interface";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts:IPost[];
  constructor(private activatedRoute:ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => {
      this.posts = value.posts
      console.log(this.posts)
    })
  }

  ngOnInit(): void {
  }

}
