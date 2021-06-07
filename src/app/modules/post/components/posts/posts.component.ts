import {Component, OnInit} from '@angular/core';
import {PostsService} from "../../services/posts.service";
import {IPost} from "../../../../interfaces/post.interface";
import {IComment} from "../../../../interfaces/comments.interface";
import {CommentsService} from "../../services/comments.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: IPost[];
  comments:IComment[];

  constructor(private postsService: PostsService,private commentsService:CommentsService) {
  }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(value => this.posts = value);
  }

}
