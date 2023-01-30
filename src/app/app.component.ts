import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Car } from 'src/app/models/car.model';
import { carService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}


}
