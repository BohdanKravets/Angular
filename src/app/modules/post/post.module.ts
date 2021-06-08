import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/posts/post/post.component';
import {CommentsService, PostsResolverService, PostsService} from "../../services";
import {HttpClientModule} from "@angular/common/http";
import { PostCommentComponent } from './components/post-comments/post-comment/post-comment.component';
import {PostCommentsComponent} from './components/post-comments/post-comments.component';


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostCommentComponent,
    PostCommentsComponent,
    PostCommentComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PostRoutingModule
  ],
  providers:[
    CommentsService,
    PostsResolverService
  ]
})
export class PostModule { }
