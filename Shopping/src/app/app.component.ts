import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Shopping';
  item_count = 0;
  addtoCart() {
    this.item_count++;
  }
  removeFromCart() {
    if (this.item_count > 0) {
      this.item_count--;
    }

  }
}
