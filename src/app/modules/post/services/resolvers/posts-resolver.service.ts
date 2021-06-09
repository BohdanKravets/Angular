import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {IPost} from "../../../../interfaces";
import {Observable} from "rxjs";
import {PostsService} from "../posts.service";

@Injectable({
  providedIn: 'root'
})
export class PostsResolverService implements Resolve<IPost[]>{

  constructor(private postsService:PostsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPost[]> | Promise<IPost[]> | IPost[] {
    return this.postsService.getAll();
  }
}
