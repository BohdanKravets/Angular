import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {urls} from "../constants/urls";
import {Observable} from "rxjs";
import {IPost} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(urls.posts);
  }

  getByUserId(userId: number): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(urls.posts, {
      params: new HttpParams({
        fromObject: {userId}
      })
    });
  }
}
