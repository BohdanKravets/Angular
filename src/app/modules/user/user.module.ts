import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import {PostsService} from "../../services/posts.service";
import {UsersService} from "../../services/users.service";
import {HttpClientModule} from "@angular/common/http";
import { UserComponent } from './components/users/user/user.component';
import { PostComponent } from './components/posts/post/post.component';


@NgModule({
  declarations: [
    UsersComponent,
    PostsComponent,
    UserComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  providers:[
    PostsService,
    UsersService
  ]

})
export class UserModule { }
