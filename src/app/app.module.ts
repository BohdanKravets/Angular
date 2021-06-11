import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './components/app/app.component';
import { SelectComponent } from './components/select/select.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { UserDetailsComponent } from './components/user-details/user-details.component';

// створити select з юзерами(jsonplaceholder), при кліку на кнопку показати інформацію про юзера
@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    UserDetailsComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
