import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CommentsService} from "../services/comments.service";
import {IComment} from "../../../interfaces/comment";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {
  commentInfo: IComment;

  constructor(private activatedRoute: ActivatedRoute, private commentsService: CommentsService) {
    this.activatedRoute.params.subscribe(params => {
      this.commentsService.getById(params.id).subscribe(value => this.commentInfo=value)
    });
  }

  ngOnInit(): void {
  }

}
