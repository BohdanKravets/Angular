import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from "./components/posts/posts.component";
import {CommentsComponent} from "./components/comments/comments.component";

const routes: Routes = [{
  path: '', component: PostsComponent, children: [{
    path: ':id', component: CommentsComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {
}
