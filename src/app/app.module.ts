import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UsersComponent} from './components/users/users.component';
import {UserComponent} from './components/users/user/user.component';
import {UserDetailComponent} from './components/users/user/user-detail/user-detail.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostComponent} from './components/posts/post/post.component';
import {PostDetailsComponent} from './components/posts/post/post-details/post-details.component';
import {CommentsComponent} from './components/comments/comments.component';
import {CommentComponent} from './components/comments/comment/comment.component';
import {CommentDetailsComponent} from './components/comments/comment/comment-details/comment-details.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {CommentsResolverService, PostsResolverService, UsersResolverService} from "./services";

const routes: Routes = [
  {
    path: 'users', component: UsersComponent, resolve: {users: UsersResolverService}, children: [
      {path: ':id', component: UserDetailComponent}
    ]
  },
  {path: 'posts', component: PostsComponent, resolve: {posts: PostsResolverService}},
  {path: 'posts/:id', component: PostDetailsComponent},
  {
    path: 'comments', component: CommentsComponent, resolve: {comments: CommentsResolverService}, children: [
      {path: ':id', component: CommentDetailsComponent}
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailComponent,
    PostsComponent,
    PostComponent,
    PostDetailsComponent,
    CommentsComponent,
    CommentComponent,
    CommentDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
