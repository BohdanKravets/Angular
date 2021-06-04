import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {IUser} from "../interfaces";
import {HttpClient} from "@angular/common/http";
import {urls} from "../../../constants";

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(urls.users);
  }
}
