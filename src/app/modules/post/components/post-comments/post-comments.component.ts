import {Component, Input, OnInit} from '@angular/core';
import {IPost,IComment} from "../../../../interfaces";
import {CommentsService} from "../../../../services";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css']
})
export class PostCommentsComponent implements OnInit {


  comments: IComment[];
  @Input()
  post: IPost;


  constructor(private commentsService: CommentsService, private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(({id}) => {
      this.commentsService.getByPostId(id).subscribe(value => this.comments = value);
    })
  }

  ngOnInit(): void {

  }

}
