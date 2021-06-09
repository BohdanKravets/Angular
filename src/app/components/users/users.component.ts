import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UsersService} from "../../services/users.service";
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUser[];

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.usersService.getAll().subscribe(value => this.users=value)
  }
  @Output()
  private liftUser=new EventEmitter<IUser>()

  passUser(chosenUser: IUser) {
    this.liftUser.emit(chosenUser)

  }
}
