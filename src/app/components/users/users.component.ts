import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IUser} from "../../interface";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users:IUser[];
  constructor(private activatedRoute:ActivatedRoute) {
    activatedRoute.data.subscribe(value => {
      this.users = value.users
    })
  }

  ngOnInit(): void {
  }

}
