import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CommentsRoutingModule} from './comments-routing.module';
import {CommentsComponent} from './comments/comments.component';
import {CommentComponent} from './comment/comment.component';
import {HttpClientModule} from "@angular/common/http";
import {CommentsService} from "./services/comments.service";
import { CommentDetailsComponent } from './comment-details/comment-details.component';


@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent,
    CommentDetailsComponent,

  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    HttpClientModule
  ],
  providers:[
    CommentsService
  ]
})
export class CommentsModule {
}
