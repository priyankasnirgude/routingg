import { Component, OnInit, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Iproduct } from '../../models/products.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productsData !: Array<Iproduct>

  private _productsService = inject(ProductsService);
   constructor() { }

  ngOnInit(): void {
    this.productsData = this._productsService.fetchAllProducts()
  }

}
