import { Injectable, inject } from '@angular/core';
import { Iproduct } from '../models/products.interface';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsArr : Array<Iproduct> = [
    {
      pname : "Samsung M31",
      pid : "123",
      pstatus : "In-Progress",
      canReturn : 1
    },
    {
      pname : "Samsung TV",
      pid : "124",
      pstatus : "Dispatched",
      canReturn : 1
    },
    {
      pname : "Samsung Headphones",
      pid : "125",
      pstatus : "Delivered",
      canReturn : 0
    },
  ]

  private _snackBarService = inject(SnackbarService)
  constructor() { }

  fetchAllProducts(): Array<Iproduct>{
    return this.productsArr;
  }

  fetchProduct(id:string) : Iproduct{
    return this.productsArr.find(prod => prod.pid === id) as Iproduct
  }

  addProduct(product:Iproduct){
    this.productsArr.unshift(product);
    this._snackBarService.openSnackbar(
      `The new Product ${product.pname} is added successfully!!!`
    )
  }

  updateProduct(updatedProduct : Iproduct){
    let getProductsId = this.productsArr.findIndex(
      prod => prod.pid === updatedProduct.pid
    );
    let oldProdVal = this.productsArr[getProductsId]
    this.productsArr[getProductsId] = updatedProduct;
    this._snackBarService.openSnackbar(
      `The Product ${oldProdVal.pname} is updated to ${updatedProduct.pname} successfully!!!`
    )
  }

  removeProduct(removeProd : Iproduct){
    let removeIndex = this.productsArr.findIndex(
      prod => prod.pid === removeProd.pid
    )
    this.productsArr.splice(removeIndex, 1)
    this._snackBarService.openSnackbar(`
    The Product ${removeProd.pname} is removed successfully!!!`
  )
  }
}
