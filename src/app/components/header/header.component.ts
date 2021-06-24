import { Component, OnInit } from '@angular/core';
import {DataTransferService} from "../../services/data-transfer.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
token:string | null;
  constructor(private activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe(value => {
      this.token = localStorage.getItem('token')

    })
  }

  ngOnInit(): void {


  }

}
