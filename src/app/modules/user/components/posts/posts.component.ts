import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostsService} from "../../../../services/posts.service";
import {IPost} from "../../../../interfaces/post.interface";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts:IPost[];
  constructor(private activatedRoute:ActivatedRoute,private  postsService:PostsService) {
    this.activatedRoute.params.subscribe(({id})=>{
      postsService.getByUserId(id).subscribe(value => this.posts=value)
    })
  }

  ngOnInit(): void {
  }

}
