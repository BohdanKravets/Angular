import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './components/app/app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';

const routes: Routes = [
  {path: 'users', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)},
  {path: 'posts', loadChildren: () => import('./modules/post/post.module').then(m => m.PostModule)},
  {path: 'comments', loadChildren: () => import('./modules/comment/comment.module').then(m => m.CommentModule)},
  {path:'cart', component:CartComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    CartItemComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
