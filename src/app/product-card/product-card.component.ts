import { Component, Input } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
@Input() selectionProducts: Product[] = [];
selectedProduct!: any;

constructor (
  private products: ProductsService
){}

selectProduct(workerId: number) {
  this.selectedProduct = workerId;
}

noSelectProduct(){
  this.selectedProduct = null;
}

deleteProduct(uid: number){
  this.products.deleteProduct(uid).subscribe(
    (res) => {
      console.log(res);
      
      location.reload();
    },
    (err) => {
      console.log(err);

    }
  )
}
}
