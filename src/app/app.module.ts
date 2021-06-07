import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

let routes:Routes = [
  {path:'posts', loadChildren:() => import('./modules/post/post.module').then(m => m.PostModule)},
  {path:'users', loadChildren:() => import('./modules/user/user.module').then((m => m.UserModule))
}];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
