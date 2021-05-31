import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(httpClient:HttpClient) {
    httpClient.get('https://jsonplaceholder.typicode.com/users')
  }
}
