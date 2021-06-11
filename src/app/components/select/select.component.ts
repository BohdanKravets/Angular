import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {IUser} from "../../interfaces";
import {UserService} from "../../services";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  selectControl = new FormControl();
  form = new FormGroup({
    select: this.selectControl
  });

  users: IUser[];
  chosenUser: IUser;

  @Output()
  emitter = new EventEmitter<IUser>();


  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getALL().subscribe(value => this.users = value);
  }

  getUser(): void {
    this.chosenUser = this.users.find(value => value.id === +this.selectControl.value) as IUser;
    this.emitter.emit(this.chosenUser);
  }
}
