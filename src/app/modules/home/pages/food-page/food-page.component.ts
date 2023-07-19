import { Component, OnInit } from '@angular/core';
import { FoodModel } from 'src/app/models/FoodModel';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent implements OnInit {
  total: number = 0;
  constructor(private foodService: FoodService) { }
  public foodList: FoodModel | any;

  ngOnInit(): void {
    this.foodService.getAllFood().subscribe(
      res => this.foodList = res,
      error => console.log(error)

    );

  }
  adicionarProduto(price: number) {
    this.total += price;
  }

  removerProduto(price: number) {
    this.total = Math.max(this.total - price, 0);
  }

}
