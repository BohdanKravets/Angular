import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IUser} from "../../../../interface";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userInfo: IUser;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
this.userInfo = this.router.getCurrentNavigation()?.extras.state as IUser;
    })


  }

  ngOnInit(): void {
  }

}
