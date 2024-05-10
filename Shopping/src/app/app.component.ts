// app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: string[] = [];
  newProduct: string = '';
  showEven: boolean = true;

  addProduct() {
    if (this.newProduct.trim() !== '') {
      this.products.push(this.newProduct);
      this.newProduct = ''; // Clear input
    }
  }

  toggleVisibility() {
    this.showEven = !this.showEven;
  }
}
