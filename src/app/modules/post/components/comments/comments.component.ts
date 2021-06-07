import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../../../interfaces/post.interface";
import {CommentsService} from "../../services/comments.service";
import {IComment} from "../../../../interfaces/comments.interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {


  comments: IComment[];
  @Input()
  post: IPost;



  constructor(private commentsService: CommentsService,private activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe(({id}) =>
    {
      this.commentsService.getByPostId(id).subscribe(value => this.comments = value)
    })
  }

  ngOnInit(): void {

  }

}
