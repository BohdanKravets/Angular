import { Component, OnInit } from '@angular/core';
import {IPost} from "../../../../interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
postInfo:IPost;
  constructor(private activatedRoute:ActivatedRoute,private router:Router) {
    this.activatedRoute.params.subscribe(value => {
this.postInfo = router.getCurrentNavigation()?.extras.state as IPost;
      console.log(this.postInfo)
    })
  }

  ngOnInit(): void {
  }

}
