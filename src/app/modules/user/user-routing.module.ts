import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from "./components/users/users.component";
import {UserPostsComponent} from "./components/user-posts/user-posts.component";
import {UsersResolverService} from "../../services";

const routes: Routes = [{
  path: '', component: UsersComponent, resolve: {users: UsersResolverService}, children: [
    {path: ':id', component: UserPostsComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule {
}
