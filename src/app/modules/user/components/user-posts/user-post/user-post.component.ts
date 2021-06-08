import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../../../../interfaces/post.interface";

@Component({
  selector: 'app-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {
@Input()
post:IPost
  constructor() { }

  ngOnInit(): void {
  }

}
