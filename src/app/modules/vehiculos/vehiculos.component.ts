import { take } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car.model';
import { carService } from 'src/app/services/cars.service';
import { ConfirmDialogComponent } from 'src/app/components/shared/confirm-dialog/confirm-dialog.component';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.scss']
})
export class VehiculosComponent implements OnInit{

  public listCar: Car[] = [];
  x : any;
  constructor(
    public carService: carService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getCars();
  }

  public getCars(): void {
    this.carService.getCars().pipe(take(1)).subscribe((resp: Car[]) => {
      this.listCar = resp;
      for(let i=0; i<this.listCar.length; i++){
        console.log('ID: '+this.listCar[i].id);
    }
    });

  }

  deleteCar(car: Car){
    this.carService.deleteCar(car).subscribe(() =>
    this.listCar = this.listCar?.filter(c => c.id != car.id));
  }

  confirm_dialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
