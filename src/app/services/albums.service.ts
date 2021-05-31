import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Album} from "../interfacce/album.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private url: string = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private httpService: HttpClient) {
  }

  getAlbums(): Observable<Album[]> {
    return  this.httpService.get<Album[]>(this.url)
  }
}
