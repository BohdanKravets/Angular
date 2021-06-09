import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {UsersResolverService} from "./services";
import {UserDetailsComponent} from "./users/user/user-details/user-details.component";
import {UserResolverService} from "./services/resolvers/user-resolver.service";

const routes: Routes = [
  {path: '', component: UsersComponent, resolve: {users: UsersResolverService},children:[
      {path:':id', component:UserDetailsComponent,resolve:{user:UserResolverService}}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
