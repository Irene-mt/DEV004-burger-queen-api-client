import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() selectionProducts: Product[] = [];
  @Output() showEdit = new EventEmitter<boolean>();
  @Output() productId = new EventEmitter<number>();
  selectedProduct!: any;

  constructor(
    private products: ProductsService
  ) { }

  showEditModal(productId: number){
    this.showEdit.emit(true);
    this.productId.emit(productId);
    console.log(productId);
    
  }

  selectProduct(workerId: number) {
    this.selectedProduct = workerId;
  }

  noSelectProduct() {
    this.selectedProduct = null;
  }

  deleteProduct(uid: number) {
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
