import {Component} from "@angular/core";
import {Car} from "../models/car";
import {Cars} from "../models/cars";
import {CarsService} from "../services/cars.service";
import {FilterPipe} from '../filter.pipe';

@Component({
  moduleId: module.id,
  selector: 'car',
  templateUrl: 'cars.component.html',
  providers: [CarsService],
})

export class CarsComponent {
  cars: Car[];
  selectedCar: string;
  carsList: Car[] = [];

  constructor(private CarsService: CarsService) {
    this.getCars();
  }

  getCars() {
    this.CarsService.getCars().subscribe((data) => {
      this.cars = data.data;
      }, (err) => {
        console.log("Error while getting Cars");
      });
      console.log(this.cars);
  }

  selectCar(car:Car) {
    if (this.carsList.length < 3 && (!this.carsList.includes(car))) {
      this.carsList.push(car);
    }
  }

  onSubmit() {
    var d = document.getElementsByClassName("flipped-image");
    d[0].className += " end-race";
    d[1].className += " end-race";
    d[2].className += " end-race";
    console.log(d.className);

    var speed1 = this.carsList[0].speed;
    var speed2 = this.carsList[1].speed;
    var speed3 = this.carsList[2].speed;

    if(speed1 >speed2 ){
     if(speed1 > speed3 ){
      d[0].className += " first";
      if(speed2 > speed3 ){
       d[1].className += " second";
       d[2].className += " third";
      }else{
       d[2].className += " second";
       d[1].className += " third";
      }
     }else{
      d[0].className += " second";
      d[2].className += " first";
      d[1].className += " third";
     }
    }else{
     if(speed2 > speed3 ){
      d[1].className += " first";
      if(speed1 > speed3 ){
       d[0].className += " second";
       d[2].className += " third";
      }else{
       d[2].className += " second";
       d[0].className += " third";
      }
     }else{
      d[1].className += " second";
      d[2].className += " first";
      d[0].className += " third";
     }
    }

  }
}
