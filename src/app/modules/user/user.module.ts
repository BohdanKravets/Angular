import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {UsersComponent} from './components/users/users.component';
import {UserPostsComponent} from './components/user-posts/user-posts.component';
import {PostsService, UsersResolverService} from "../../services";
import {HttpClientModule} from "@angular/common/http";
import {UserComponent} from './components/users/user/user.component';
import {UserPostComponent} from './components/user-posts/user-post/user-post.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserPostsComponent,
    UserComponent,
    UserPostComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  providers: [
    PostsService,
    UsersResolverService
  ]

})
export class UserModule {
}
