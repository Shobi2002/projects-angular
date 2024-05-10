// product-list.component.ts

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: string[] = [];
  @Input() showEven: boolean = true;

  getStyle(index: number) {
    if ((index + 1) === 10) {
      return { 'background-color': 'blue' };
    } else if ((index + 1) === 15 || (index + 1) === 16) {
      return { 'color': 'yellow', 'background-color': 'blue' };
    } else {
      return {};
    }
  }
}
