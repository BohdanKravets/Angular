import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComment} from "../../../interfaces/comments.interface";
import {urls} from "../../../constants/urls";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private httpClient:HttpClient) { }

  getByPostId(id:number):Observable<IComment[]>{
    return this.httpClient.get<IComment[]>(`${urls.posts}/${id}/comments`)
  }
}
