import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Car } from 'src/app/models/car.model';
import { carService } from 'src/app/services/cars.service';
import { take } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent implements OnInit {
  formValue!: FormGroup;
  carros!: Car;
  vald!: number;
  public listCar: Car[] = [];
  constructor(
    private formbuilder: FormBuilder,
    public carService: carService,
    private _snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      modelo: new FormControl('', [Validators.required]),
      marca: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      photoUrl: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
    });
  }

  boton() {
    if (this.formValue.valid) {
      this.carros = this.formValue.value;
      this.create(this.carros);
    } else {
      console.log('NoValidado');
    }
  }

  create(car: Car) {
    this.vald = 0;
    this.carService
      .getCars()
      .pipe(take(1))
      .subscribe((resp: Car[]) => {
        this.listCar = resp;
        for (let i = 0; i < this.listCar.length; i++) {
          if (this.listCar[i].id == car.id) {
            this.vald = 1;
            console.log('this.vald: ' + this.vald);
          } 
        }
        if (this.vald == 1) {
          this.openSnackBar('ID Repetido Valide nuevamente','Aceptar')
        } else {
          this.carService
            .create(car)
            .subscribe((res) => window.location.reload());
        }
      });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
