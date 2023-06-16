import { Component, Input } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
@Input() selectionProducts: Product[] = []

constructor (
  private products: ProductsService
){}

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
