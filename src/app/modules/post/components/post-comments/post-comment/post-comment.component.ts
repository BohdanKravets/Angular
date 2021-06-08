import {Component, Input, OnInit} from '@angular/core';
import {IComment} from "../../../../../interfaces";

@Component({
  selector: 'app-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit {
@Input()
comment:IComment
  constructor() { }

  ngOnInit(): void {
  }

}
