import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post/post.component';
import {HttpClientModule} from "@angular/common/http";
import {PostsResolverService, PostsService} from "./services";


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ],
  providers:[
    PostsService,
    PostsResolverService
  ]
})
export class PostModule { }
