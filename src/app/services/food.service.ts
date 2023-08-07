import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_PATH } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { FoodModel } from '../models/FoodModel';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private httpClient: HttpClient) { }

  getAllFood(): Observable<FoodModel[]> {
    return this.httpClient.get<FoodModel[]>(`${API_PATH}foods`);
  }

  getFoodsForType(type: string): Observable<FoodModel[]> {
    return this.httpClient.get<FoodModel[]>(`${API_PATH}foods/type/${type}`);
  }

  getAllTypes(): Observable<FoodModel[]> {
    return this.httpClient.get<FoodModel[]>(`${API_PATH}foods/types`);
  }
}
