import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsComponent} from "./posts/posts.component";
import {PostsResolverService} from "./services";

const routes: Routes = [
  {path:'',component:PostsComponent,resolve:{posts:PostsResolverService}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
