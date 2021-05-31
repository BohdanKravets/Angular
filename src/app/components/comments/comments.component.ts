import {Component, Input, OnInit} from '@angular/core';
import {CommentsService} from "../../services";
import {IComment} from "../../interfaces";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input()
  postId: number

  comments: IComment[];

  constructor(private commentsService: CommentsService) {
  }

  ngOnInit(): void {
    this.commentsService.getByPostId(this.postId).subscribe(value => this.comments = value);
  }

}
