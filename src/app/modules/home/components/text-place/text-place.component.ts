import { Component } from '@angular/core';

@Component({
  selector: 'app-text-place',
  templateUrl: './text-place.component.html',
  styleUrls: ['./text-place.component.scss']
})
export class TextPlaceComponent {

  public status: string = "aberto"

  getStyle() {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 9 && hour < 23) {
      return { background: 'green' };
    } else {
      this.status = 'fechado';
      return { background: 'red' };
    }
  }

}
