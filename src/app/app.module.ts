import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { CarsComponent } from './components/cars/cars.component';
import { CarComponent } from './components/car/car.component';
import { CarAddingFormComponent } from './components/car-adding-form/car-adding-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import { LoginFormComponent } from './components/login-form/login-form.component';
import {AuthInterceptorService} from "./services/auth-interceptor.service";
import { LogoutComponent } from './components/logout/logout.component';
import {RouterModule, Routes} from "@angular/router";
import { HeaderComponent } from './components/header/header.component';

let routes:Routes =[
  {path:'', component:CarsComponent},
  {path:'login',component:LoginFormComponent},
  {path:'addCar',component:CarAddingFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    CarAddingFormComponent,
    LoginFormComponent,
    LogoutComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
