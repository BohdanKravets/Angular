import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IUser} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
store = new BehaviorSubject<string>('Anonimous');

  constructor() { }
}
