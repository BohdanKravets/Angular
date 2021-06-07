import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/posts/post/post.component';
import {PostsService} from "./services/posts.service";
import {HttpClientModule} from "@angular/common/http";
import { CommentsComponent } from './components/comments/comments.component';
import { CommentComponent } from './components/comments/comment/comment.component';


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    CommentsComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PostRoutingModule
  ],
  providers:[
    PostsService
  ]
})
export class PostModule { }
