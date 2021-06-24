import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../interfaces/user.interface";
import {IResponse, IToken} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://92.253.239.109/api/v1/auth'
  private readonly tokenKey = 'token'

  constructor(private httpClient: HttpClient) {
  }

  login(user: IUser): Observable<IResponse> {
    return this.httpClient.post<IResponse>(this.url, user)
  }

  setToken({access}: IToken): void {
    localStorage.setItem(this.tokenKey, access)
  }

  getToken(): string {
    return localStorage.getItem(this.tokenKey) as string;
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.tokenKey)
  }
}
