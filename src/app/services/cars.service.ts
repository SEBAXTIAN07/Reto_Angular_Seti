import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car.model';
import { environment } from '../../environments/environment.prod';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable()
export class carService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  public getCars(): Observable<Car[]> {
    const url: string = environment.API_REST_URL+`/cars/`;
    return this._httpClient.get<Car[]>(url);
  }

  deleteCar(car: Car): Observable<Car>{
    const url: string = environment.API_REST_URL + `/cars/${car.id}`;
    return this._httpClient.delete<Car>(url);
  }

  getCar(id: number): Observable<Car>{
    const url: string = environment.API_REST_URL + `/cars/${id}`;
    return this._httpClient.get<Car>(url);
  }

  updateCar(car: any): Observable<any>{
    const url: string = environment.API_REST_URL + `/cars/${car.id}`;
    return this._httpClient.patch<Car>(url, car, httpOptions);
  }

  create(car: any): Observable<any>{
    const url: string = environment.API_REST_URL + `/cars/`;
    return this._httpClient.post<Car>(url, car);
  }

}
