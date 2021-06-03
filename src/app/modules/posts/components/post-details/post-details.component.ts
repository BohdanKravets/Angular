import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IPost} from "../../../../interfaces/post";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  postInfo:IPost;
  constructor(private activatedRoute:ActivatedRoute,private router:Router) {
    activatedRoute.params.subscribe(params =>
    {
      this.postInfo = this.router.getCurrentNavigation()?.extras.state as IPost
    })

  }

  ngOnInit(): void {
  }

}
