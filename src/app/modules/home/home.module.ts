import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ChoiceProductsComponent } from './components/choice-products/choice-products.component';
import { HomeComponent } from './pages/home/home.component';
import { TextPlaceComponent } from './components/text-place/text-place.component';
import { FoodPageComponent } from './pages/food-page/food-page.component';
import { ReplaceDecimalPipe } from 'src/app/replaceDecimal.pipe';
import { CartItemComponent } from './pages/food-page/cart-item/cart-item.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ChoiceProductsComponent,
    HomeComponent,
    TextPlaceComponent,
    FoodPageComponent,
    ReplaceDecimalPipe,
    CartItemComponent,
    
  ],
  imports: [
    CommonModule,
    
  ]
})
export class HomeModule { }
