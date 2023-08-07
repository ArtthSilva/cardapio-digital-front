import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { FoodPageComponent } from './modules/home/pages/food-page/food-page.component';

const routes: Routes = [
  {path: "", component: HomeComponent, pathMatch: 'full'},
  { path: 'food/:type', component: FoodPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
