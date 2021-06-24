import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ICar} from "../../interfaces";
import {CarService} from "../../services";

@Component({
  selector: 'app-car-adding-form',
  templateUrl: './car-adding-form.component.html',
  styleUrls: ['./car-adding-form.component.css']
})
export class CarAddingFormComponent implements OnInit {
  modelControl = new FormControl('');
  priceControl = new FormControl(0);
  yearControl = new FormControl(0);


  addCarForm = new FormGroup({
    model: this.modelControl,
    price: this.priceControl,
    year: this.yearControl
  })

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {
  }

  addCar() {
this.carService.postCar(this.addCarForm.value).subscribe(value =>{
  console.log(value)
location.reload();
} );
  }
}
