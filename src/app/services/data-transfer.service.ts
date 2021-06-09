import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IPost} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  store: BehaviorSubject<IPost[]> = new BehaviorSubject<IPost[]>([]);

  constructor() {
  }
}
