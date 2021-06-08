import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostsService} from "../../../../services";
import {IPost} from "../../../../interfaces";

@Component({
  selector: 'app-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {
  posts: IPost[];

  constructor(private activatedRoute: ActivatedRoute, private postsService: PostsService) {
    this.activatedRoute.params.subscribe(({id}) => {
      postsService.getByUserId(id).subscribe(value => this.posts = value)
    })
  }

  ngOnInit(): void {
  }

}
