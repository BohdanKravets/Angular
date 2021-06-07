import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../../../../interfaces/post.interface";
import {CommentsService} from "../../../../../services/comments.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
@Input()
post:IPost;
  constructor(private commentsService:CommentsService) { }

  ngOnInit(): void {
    this.commentsService.getByPostId(this.post.id).subscribe()
  }

}
