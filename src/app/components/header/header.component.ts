import { Component, OnInit } from '@angular/core';
import {DataTransferService} from "../../services";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
username:string;
  constructor(private dataTransferService:DataTransferService) { }

  ngOnInit(): void {
    this.dataTransferService.store.subscribe(value => this.username =value);

  }

}
