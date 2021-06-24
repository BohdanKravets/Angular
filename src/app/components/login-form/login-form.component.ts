import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../services";
import {ActivatedRoute, Router} from "@angular/router";
import {DataTransferService} from "../../services/data-transfer.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
token:string | null;
  emailControl = new FormControl('');
  passwordControl = new FormControl('');

  loginForm = new FormGroup({
    email: this.emailControl,
    password: this.passwordControl
  })

  constructor(private authService:AuthService,private router:Router,private activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe(value => {
      this.token = localStorage.getItem('token')

    })
  }

  ngOnInit() {


  }

  login() {
this.authService.login(this.loginForm.value).subscribe( value =>{
  if(value.access){
    localStorage.setItem('token',value.access);
    this.router.navigate(['']);
  }

} )


  }
}
