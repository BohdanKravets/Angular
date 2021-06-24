import {Component, Input, OnInit} from '@angular/core';
import {ICar} from "../../interfaces";
import {CarService} from "../../services";
import {DataTransferService} from "../../services/data-transfer.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
@Input()
car:ICar;
token:string | null;

  constructor(private carService:CarService,private router:Router,private activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe(value => {
      this.token = localStorage.getItem('token')

    })
  }

  ngOnInit(): void {

  }

  deleteCar() {
this.carService.deleteCar(this.car.id).subscribe(value => {
  console.log(value);
  this.router.navigate([''])

});

    console.log(this.car.id)
  }
}
