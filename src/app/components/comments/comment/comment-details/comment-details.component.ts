import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CommentsService} from "../../../../services";
import {IComment} from "../../../../interface";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {
  commentInfo: IComment;

  constructor(private activatedRoute: ActivatedRoute, private commentsService: CommentsService) {
    this.activatedRoute.params.subscribe(params => {
        commentsService.getById(params.id).subscribe(value => {
          this.commentInfo = value;
        })
      }
    )
  }

  ngOnInit(): void {
  }

}
