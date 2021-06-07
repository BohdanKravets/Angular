import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {urls} from "../../../constants/urls";
import {Observable} from "rxjs";
import {IPost} from "../../../interfaces/post.interface";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient:HttpClient) { }

  getByUserId(userId:number):Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(`${urls.users}/${userId}/posts`)
  }
}
