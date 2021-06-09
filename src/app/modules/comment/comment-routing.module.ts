import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommentsComponent} from "./components/comments/comments.component";
import {CommentsResolverService} from "./services";

const routes: Routes = [
  {path: '', component: CommentsComponent, resolve:{comments:CommentsResolverService}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule {
}
