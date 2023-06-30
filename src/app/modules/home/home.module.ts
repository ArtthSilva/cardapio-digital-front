import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ChoiceProductsComponent } from './components/choice-products/choice-products.component';
import { HomeComponent } from './pages/home/home.component';
import { TextPlaceComponent } from './components/text-place/text-place.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ChoiceProductsComponent,
    HomeComponent,
    TextPlaceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
