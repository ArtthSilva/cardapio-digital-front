import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodModel } from 'src/app/models/FoodModel';
import { FoodService } from 'src/app/services/food.service';
 
@Component({
  selector: 'app-choice-products',
  templateUrl: './choice-products.component.html',
  styleUrls: ['./choice-products.component.scss']
})
export class ChoiceProductsComponent implements OnInit {
  constructor(private foodService: FoodService, private router: Router) { }
  public foodList: FoodModel | any;

    ngOnInit(): void {
      this.foodService.getAllTypes().subscribe(
        res => this.foodList = res,
        error => console.log(error)
  
      );
  }

  redirectToFoodComponent(type: string) {
    this.router.navigate(['/food', type]);
  }
}
 
