import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
token:string | null
  constructor(private router:Router,private  activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe(value => {
      this.token = localStorage.getItem('token')

    })
  }

  ngOnInit(): void {


  }

  logout() {
    localStorage.removeItem('token');
this.router.navigate(['login'])
}
}
