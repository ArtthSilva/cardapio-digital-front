import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {

  total: number = 0;
  @Input() item: any;
  @Output() adicionarProduto = new EventEmitter<number>();
  @Output() removerProduto = new EventEmitter<number>();

   
}
