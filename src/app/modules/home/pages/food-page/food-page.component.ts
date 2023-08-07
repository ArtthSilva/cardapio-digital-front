import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FoodModel } from 'src/app/models/FoodModel';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent implements OnInit {
  total: number = 0;
  foodList: FoodModel[] = [];
  selectedType: string | null = null;

  constructor(
    private foodService: FoodService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.selectedType = params.get('type');
      this.loadProduct(this.selectedType);
    });
  }

  loadProduct(selectedType: string | null): void {
    if (selectedType) {
      this.foodService.getFoodsForType(selectedType).subscribe(
        res => {
          this.foodList = res;
        },
        error => console.log(error)
      );
    } else {
         
      (error: any) => console.log(error);
    }
  }

  adicionarProduto(price: number) {
    this.total += price;
  }

  removerProduto(price: number) {
    this.total = Math.max(this.total - price, 0);
  }

  goBack() {
    this.location.back();
  }
}
