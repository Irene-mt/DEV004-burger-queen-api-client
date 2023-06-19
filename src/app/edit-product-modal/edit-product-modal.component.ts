import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-edit-product-modal',
  templateUrl: './edit-product-modal.component.html',
  styleUrls: ['./edit-product-modal.component.css']
})
export class EditProductModalComponent {
  @Input() productId!: number;
  @Output() hideEdit = new EventEmitter<boolean>();
  productForm!: FormGroup;
  productInfo!: Product;

  constructor(
    private fb: FormBuilder,
    private products: ProductsService,
  ) {
    this.productForm = new FormGroup({
      name: new FormControl(),
      price: new FormControl(),
      image: new FormControl(),
      type: new FormControl(),
    })
  }

  ngOnInit() {
    console.log(this.productId);
    this.products.getProduct(this.productId).subscribe((product) => {
      this.productInfo = product;
      this.createForm();
    })
  }
  
  createForm() {
    this.productForm = this.fb.group({
      name: [this.productInfo.name, Validators.required],
      price: [this.productInfo.price, Validators.required],
      image: [this.productInfo.image, Validators.required],
      type: [this.productInfo.type, Validators.required]
    })
  }

  editProduct() {
    this.products.editProduct(this.productInfo.id, this.productForm.value)
    .subscribe(
      (res) => {
        console.log(res);
        location.reload();
      })
  }

  cancelEdit() {
    this.hideEdit.emit(false);
  }
}
