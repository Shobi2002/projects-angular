
import { Component } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  productName: string;
  productList: Array<string>;

  constructor() {
    this.productName = "";
    this.productList = ["Dell", "Lenovo", "Sony"];
  }
  addProduct() {
    if (this.productName.length > 0) {
      this.productList.push(this.productName);
      this.productName = "";
    }
  }
}
