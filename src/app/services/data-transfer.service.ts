import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
token = new BehaviorSubject<string>('')
  constructor() { }
}
