import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CarService} from "../../services";
import {ICar} from "../../interfaces";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: ICar[];



  constructor(private carService: CarService) {
  }

  ngOnInit(): void {
    this.carService.getALL().subscribe(value => this.cars = value);
  }

}
