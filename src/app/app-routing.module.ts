import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { UsersComponent } from './shared/components/users/users.component';
import { UserComponent } from './shared/components/users/user/user.component';
import { EditUserComponent } from './shared/components/users/edit-user/edit-user.component';
import { ProductFormComponent } from './shared/components/products/product-form/product-form.component';
import { ProductComponent } from './shared/components/products/product/product.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes : Routes = [
  {
  path : '',
  component : HomeComponent
},
{
  path : 'products',
  component : ProductsComponent,
  children : [
    {
      path : 'addproduct',
      component : ProductFormComponent
    },
    {
      path : ':productId', //:productId = params (any value)
      component : ProductComponent
    },
    {
      path : ':productId/edit',
      component : ProductFormComponent
    },
  ]
},

{
  path : 'users',
  component : UsersComponent,
  children :[
    {
      path : 'addUser',
      component : EditUserComponent
    },
    {
      path : ':userId',
      component : UserComponent
    },
    {
      path : ':userId/edit',
      component : EditUserComponent
    },
  ]
},
{
  path: 'page-not-found',
  component: PageNotFoundComponent
},
{
  path: '**',
  redirectTo: 'page-not-found'
}

]




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


 

export class AppRoutingModule { }


