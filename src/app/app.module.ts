import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/users/user/user-details/user-details.component';
import { UserComponent } from './components/users/user/user.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/posts/post/post.component';
import { PostDetailsComponent } from './components/posts/post/post-details/post-details.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {PostsResolverService, UserResolverService} from "./services";

const routes:Routes =[
  {path:'users', component:UsersComponent,resolve:{users:UserResolverService},children:[
      {path: ':id',component: UserDetailsComponent}
    ]},
  {path:'posts', component:PostsComponent,resolve:{posts:PostsResolverService}, children:[
      {path:':id',component:PostDetailsComponent}

    ]}
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailsComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    PostDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
