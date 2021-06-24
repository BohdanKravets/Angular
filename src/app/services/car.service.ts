import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICar} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private url = 'http://92.253.239.109/api/v1/cars';

  constructor(private httpClient: HttpClient) {
  }

  getALL(): Observable<ICar[]> {
    return this.httpClient.get<ICar[]>(this.url)
  }

  postCar(car: ICar): Observable<ICar> {
    return this.httpClient.post<ICar>(this.url, car)
  }

  deleteCar(id:number){
    return this.httpClient.delete(`${this.url}/${id}`)
  }
}
