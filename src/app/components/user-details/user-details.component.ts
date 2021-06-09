import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../interfaces";
import {DataTransferService} from "../../services/data-transfer.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
@Input()
userDetails:IUser;
  constructor(private dataTransferService:DataTransferService) { }

  ngOnInit(): void {

  }

  login() {
    this.dataTransferService.store.next(this.userDetails.username);
  }
}
