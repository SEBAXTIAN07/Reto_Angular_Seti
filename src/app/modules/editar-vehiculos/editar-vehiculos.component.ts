import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { carService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-editar-vehiculos',
  templateUrl: './editar-vehiculos.component.html',
  styleUrls: ['./editar-vehiculos.component.scss']
})
export class EditarVehiculosComponent {

  car: any = "";

  id: string = "";

  constructor(
    private carService: carService,
    private route: ActivatedRoute,
    private router: Router ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id =params['id'];
      this.carService.getCar(params['id']).subscribe((car) => this.car = car);
    });
  }

  onSubmit(f: NgForm){
    const updatedCar = {
      id: this.id,
      name: f.value.name,
      modelo: f.value.modelo,
      marca: f.value.marca,
      description: f.value.description,
      photoUrl: f.value.photoUrl,
      price: f.value.price
    }
    this.carService.updateCar(updatedCar).subscribe(() => this.router.navigate(['/vehiculos']));
  }

}
