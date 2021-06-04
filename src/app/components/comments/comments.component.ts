import {Component, OnInit} from '@angular/core';
import {IComment, IPost} from "../../interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: IComment[];

  constructor(private activatedRoute:ActivatedRoute) {
  this.activatedRoute.data.subscribe(value => {
    this.comments = value.comments;
  })
  }

  ngOnInit(): void {
  }

}
