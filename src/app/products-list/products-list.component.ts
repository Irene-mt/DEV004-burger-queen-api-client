import { Component } from '@angular/core';
import { AuthLoginService } from '../services/auth-login.service';
import { ProductsService } from '../services/products.service';
import { Product } from '../interfaces/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  products: Array<Product> = [{
    id: 0,
    dateEntry: '',
    image: '',
    name: '',
    price: 0,
    type: ''
  }]

  selectedProducts: Product[] = []
  btnActive: string = '';

  constructor(
    private logService: AuthLoginService,
    public productServ: ProductsService,
    private router: Router,
  ) { }

  showSelectedProduct(type: string){
    this.btnActive = type;
    this.productServ.getProducts().subscribe((data) => {
      this.products = data;    
      this.selectedProducts = this.products.filter((eachProduct) => {
        return eachProduct.type === type;
      })
    })
  }

  navigateWorkers(){
    this.router.navigate(['/workers-list']);
  }

  logOut() {
    this.logService.logout();
  }
}
