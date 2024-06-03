import { Component, OnInit, inject } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/models/products.interface';
import { ProductsService } from 'src/app/shared/services/products.service';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productsId !: string;
  productObj !: Iproduct;

  private _route = inject(ActivatedRoute);
  private _router = inject(Router);
  private _productsService = inject(ProductsService);
  constructor(
    private _matDialog : MatDialog
  ) { }

  ngOnInit(): void {
    // console.log(this._route.snapshot.params);
    // console.log(this._route.params);
    
    // this.productsId = this._route.snapshot.params['productId'];
    // this.productObj = this._productsService.fetchProduct(this.productsId)

    this._route.params
    .subscribe(res => {
      console.log(res);
      this.productsId = res['productsId'];
      this.productObj = this._productsService.fetchProduct(this.productsId)
      
    })
  }


  onRemoveProduct(){

    let dialogConf =  new MatDialogConfig();
    dialogConf.width = "350px";
    dialogConf.data = `Are you sure, you want to remove product ${this.productObj.pname}`
    
    let dialogRef = this._matDialog.open(ConfirmDialogComponent, dialogConf)


    dialogRef.afterClosed()
    .subscribe(res => {
      if(res){
        this._productsService.removeProduct(this.productObj);
        this._router.navigate(['/products'])
      }else{
        return
      }
    })
  }

}
