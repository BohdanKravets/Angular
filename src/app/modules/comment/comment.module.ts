import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommentsComponent} from './components/comments/comments.component';
import {CommentComponent} from './components/comments/comment/comment.component';
import {CommentRoutingModule} from "./comment-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {CommentsResolverService, CommentsService} from "./services";


@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    CommentRoutingModule,
    HttpClientModule
  ],
  providers: [
    CommentsService,
    CommentsResolverService
  ]
})
export class CommentModule {
}
