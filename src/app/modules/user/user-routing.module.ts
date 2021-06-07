import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./components/users/users.component";
import {providerDef} from "@angular/compiler/src/view_compiler/provider_compiler";
import {PostsComponent} from "./components/posts/posts.component";

const routes: Routes = [{path:'',component:UsersComponent, children:[
    {path:':id',component:PostsComponent}
  ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }
